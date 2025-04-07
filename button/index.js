import{jsxs as e,jsx as t}from"react/jsx-runtime";import n from"react";import a,{css as r,keyframes as o}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,s="object"==typeof c&&c&&c.Object===Object&&c,u="object"==typeof self&&self&&self.Object===Object&&self,f=s||u||Function("return this")(),h=f.Symbol,F=h,p=Object.prototype,B=p.hasOwnProperty,S=p.toString,y=F?F.toStringTag:void 0;var m=function(e){var t=B.call(e,y),n=e[y];try{e[y]=void 0;var a=!0}catch(e){}var r=S.call(e);return a&&(t?e[y]=n:delete e[y]),r},D=Object.prototype.toString;var b=m,$=function(e){return D.call(e)},H=h?h.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?b(e):$(e)};var E=v,x=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==E(e)},z=g,A=k,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var w=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(O.test(e)||!C.test(e)||null!=t&&e in Object(t))};var _=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=v,W=_;var P,T=function(e){if(!W(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=f["__core-js_shared__"],j=(P=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var N=function(e){return!!j&&j in e},R=Function.prototype.toString;var L=T,J=N,X=_,G=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,K=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!X(e)||J(e))&&(L(e)?K:M).test(G(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Q(n)?n:void 0},ne=te(Object,"create"),ae=ne;var re=function(){this.__data__=ae?ae(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},de=ne,ge=Object.prototype.hasOwnProperty;var se=ne;var ue=re,fe=oe,he=ce,Fe=function(e){var t=this.__data__;return de?void 0!==t[e]:ge.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Be.prototype.clear=ue,Be.prototype.delete=fe,Be.prototype.get=he,Be.prototype.has=Fe,Be.prototype.set=pe;var Se=Be;var ye=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1},be=De,$e=Array.prototype.splice;var He=De;var ve=De;var Ee=De;var xe=ye,ke=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return ve(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,a=Ee(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Oe.prototype.clear=xe,Oe.prototype.delete=ke,Oe.prototype.get=ze,Oe.prototype.has=Ae,Oe.prototype.set=Ce;var we=Oe,_e=te(f,"Map"),Ve=Se,We=we,Pe=_e;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ie;var Ne=Ie;var Re=Ie;var Le=Ie;var Je=function(){this.size=0,this.__data__={hash:new Ve,map:new(Pe||We),string:new Ve}},Xe=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ne(this,e).get(e)},Me=function(e){return Re(this,e).has(e)},Ue=function(e,t){var n=Le(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ze.prototype.clear=Je,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=e.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(qe.Cache||Ye),n}qe.Cache=Ye;var Ke=qe;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,a,r){t.push(a?r.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},at=g,rt=k,ot=h?h.prototype:void 0,it=ot?ot.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(at(t))return nt(t,e)+"";if(rt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ct=lt;var dt=g,gt=w,st=tt,ut=function(e){return null==e?"":ct(e)};var ft=k;var ht=function(e,t){return dt(e)?e:gt(e,t)?[e]:st(ut(e))},Ft=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var pt=function(e,t){for(var n=0,a=(t=ht(t,e)).length;null!=e&&n<a;)e=e[Ft(t[n++])];return n&&n==a?e:void 0};var Bt=d((function(e,t,n){var a=null==e?void 0:pt(e,t);return void 0===a?n:a}));const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,yt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,a=yt(Dt,n[mt.colorScheme]);return n.options&&n.options.color?St(a,e,n.options.color):St(a,e)},$t={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},Ht={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},vt=e=>t=>{var n;const a=t.theme,r=yt(Ht,a[mt.designTokenScheme]);return(null===(n=a.options)||void 0===n?void 0:n.designToken)?St(r,e,a.options.designToken):St(r,e)},Et={InputBoxShadow:vt("InputBoxShadow"),InputErrorBoxShadow:vt("InputErrorBoxShadow"),ElevationBoxShadow:vt("ElevationBoxShadow"),Table:{Header:vt("Table.Header"),Cell:{Primary:vt("Table.Cell.Primary"),Secondary:vt("Table.Cell.Secondary"),Selected:vt("Table.Cell.Selected"),Hover:vt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:vt("Button.Danger.BackgroundColor"),Hover:vt("Button.Danger.Hover"),Primary:vt("Button.Danger.Primary"),Border:vt("Button.Danger.Border")}}},xt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},kt=e=>Object.keys(xt).reduce(((t,n)=>{const a=xt[n];return t[n]=`@media screen and (${e}: ${a}px)`,t}),{}),zt=kt("max-width"),At=(kt("min-width"),a.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ct=o`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ot=a.div`
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
    animation: ${Ct} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,wt=a(Ot)`
    animation-delay: -0.45s;
`,_t=a(Ot)`
    animation-delay: -0.3s;
`,Vt=a(Ot)`
    animation-delay: -0.15s;
`,Wt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Pt={D1:{fontFamily:Wt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Tt={D1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},It={collections:{base:Pt,oneservice:{D1:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Tt},defaultValue:"base"},jt=e=>t=>{const n=t.theme,a=yt(It,n[mt.textStyleScheme]);return n.options&&n.options.textStyle?St(a,e,n.options.textStyle):St(a,e)},Nt={D1:{fontFamily:jt("D1.fontFamily"),fontSize:jt("D1.fontSize"),fontWeight:jt("D1.fontWeight"),lineHeight:jt("D1.lineHeight"),letterSpacing:jt("D1.letterSpacing"),fontVariant:jt("D1.fontVariant")},D2:{fontFamily:jt("D2.fontFamily"),fontSize:jt("D2.fontSize"),fontWeight:jt("D2.fontWeight"),lineHeight:jt("D2.lineHeight"),letterSpacing:jt("D2.letterSpacing"),fontVariant:jt("D2.fontVariant")},D3:{fontFamily:jt("D3.fontFamily"),fontSize:jt("D3.fontSize"),fontWeight:jt("D3.fontWeight"),lineHeight:jt("D3.lineHeight"),letterSpacing:jt("D3.letterSpacing"),fontVariant:jt("D3.fontVariant")},D4:{fontFamily:jt("D4.fontFamily"),fontSize:jt("D4.fontSize"),fontWeight:jt("D4.fontWeight"),lineHeight:jt("D4.lineHeight"),letterSpacing:jt("D4.letterSpacing"),fontVariant:jt("D4.fontVariant")},DBody:{fontFamily:jt("DBody.fontFamily"),fontSize:jt("DBody.fontSize"),fontWeight:jt("DBody.fontWeight"),lineHeight:jt("DBody.lineHeight"),letterSpacing:jt("DBody.letterSpacing"),fontVariant:jt("DBody.fontVariant")},H1:{fontFamily:jt("H1.fontFamily"),fontSize:jt("H1.fontSize"),fontWeight:jt("H1.fontWeight"),lineHeight:jt("H1.lineHeight"),letterSpacing:jt("H1.letterSpacing"),fontVariant:jt("H1.fontVariant")},H2:{fontFamily:jt("H2.fontFamily"),fontSize:jt("H2.fontSize"),fontWeight:jt("H2.fontWeight"),lineHeight:jt("H2.lineHeight"),letterSpacing:jt("H2.letterSpacing"),fontVariant:jt("H2.fontVariant")},H3:{fontFamily:jt("H3.fontFamily"),fontSize:jt("H3.fontSize"),fontWeight:jt("H3.fontWeight"),lineHeight:jt("H3.lineHeight"),letterSpacing:jt("H3.letterSpacing"),fontVariant:jt("H3.fontVariant")},H4:{fontFamily:jt("H4.fontFamily"),fontSize:jt("H4.fontSize"),fontWeight:jt("H4.fontWeight"),lineHeight:jt("H4.lineHeight"),letterSpacing:jt("H4.letterSpacing"),fontVariant:jt("H4.fontVariant")},H5:{fontFamily:jt("H5.fontFamily"),fontSize:jt("H5.fontSize"),fontWeight:jt("H5.fontWeight"),lineHeight:jt("H5.lineHeight"),letterSpacing:jt("H5.letterSpacing"),fontVariant:jt("H5.fontVariant")},H6:{fontFamily:jt("H6.fontFamily"),fontSize:jt("H6.fontSize"),fontWeight:jt("H6.fontWeight"),lineHeight:jt("H6.lineHeight"),letterSpacing:jt("H6.letterSpacing"),fontVariant:jt("H6.fontVariant")},Body:{fontFamily:jt("Body.fontFamily"),fontSize:jt("Body.fontSize"),fontWeight:jt("Body.fontWeight"),lineHeight:jt("Body.lineHeight"),letterSpacing:jt("Body.letterSpacing"),fontVariant:jt("Body.fontVariant")},BodySmall:{fontFamily:jt("BodySmall.fontFamily"),fontSize:jt("BodySmall.fontSize"),fontWeight:jt("BodySmall.fontWeight"),lineHeight:jt("BodySmall.lineHeight"),letterSpacing:jt("BodySmall.letterSpacing"),fontVariant:jt("BodySmall.fontVariant")},XSmall:{fontFamily:jt("XSmall.fontFamily"),fontSize:jt("XSmall.fontSize"),fontWeight:jt("XSmall.fontWeight"),lineHeight:jt("XSmall.lineHeight"),letterSpacing:jt("XSmall.letterSpacing"),fontVariant:jt("XSmall.fontVariant")}},Rt=[Wt.OpenSans,Wt.PlusJakartaSans],Lt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Jt=(e,t)=>n=>{var a;const o=Nt[e].fontFamily(n),i=Nt[e].fontWeight(n),l=Rt.find((e=>Object.values(e).includes(o)));return l?r`
                font-family: ${Lt(l,t)||Lt(l,i)||o};
                font-weight: normal !important;
            `:r`
            font-family: ${o};
            font-weight: ${null!==(a=Xt(t)||i)&&void 0!==a?a:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Gt=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mt=(e,t,n=!1)=>a=>{const o=Nt[e],i=o.fontSize(a);return r`
            ${Jt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            font-variant: ${o.fontVariant(a)||"normal"};
            ${r`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Ut=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${Gt(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${Gt(n)}
        `;var Zt;!function(e){e.D1=a.h1`
        ${e=>r`
                ${Mt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>r`
                ${Mt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>r`
                ${Mt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>r`
                ${Mt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>r`
                ${Mt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>r`
                ${Mt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>r`
                ${Mt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>r`
                ${Mt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>r`
                ${Mt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>r`
                ${Mt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>r`
                ${Mt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>r`
                ${Mt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>r`
                ${Mt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>r`
                ${Mt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zt||(Zt={}));const Yt=a.a`
    ${e=>r`
            ${Mt(e.textStyle,e.weight)}
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
`,qt=a(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Kt=n=>{var{external:a=!1,children:r}=n,o=l(n,["external","children"]);return e(Yt,Object.assign({},o,{children:[r,a&&t(qt,{})]}))};var Qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qt||(Qt={}));const en=a.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return r`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Et.Button.Danger.Border:$t.Primary};

                    color: ${e.$buttonIsDanger?Et.Button.Danger.Primary:$t.Primary};
                `;case"light":return r`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid ${$t.Neutral[5]};

                    color: ${e.$buttonIsDanger?Et.Button.Danger.Primary:$t.Primary};
                `;case"disabled":return r`
                    background-color: ${$t.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t.Neutral[3]};
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Et.Button.Danger.Primary:$t.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Et.Button.Danger.Hover:$t.Secondary};
                    }
                `;default:return r`
                    background-color: ${e.$buttonIsDanger?Et.Button.Danger.BackgroundColor:$t.Primary};
                    border: 1px solid transparent;

                    ${zt.mobileL} {
                        width: 100%;
                    }

                    color: ${$t.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?r`
                    height: 2.5rem;
                    ${Mt("H5","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    ${Mt("H4","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `}
`,tn=a((({color:n,className:a,size:r=18})=>e(At,Object.assign({className:a,$size:r,$color:n,"data-testid":"component-loading-spinner"},{children:[t(Ot,{id:"inner1",$size:r-2,$borderWidth:2,$color:n}),t(wt,{id:"inner2",$size:r-2,$borderWidth:2,$color:n}),t(_t,{id:"inner3",$size:r-2,$borderWidth:2,$color:n}),t(Vt,{id:"inner4",$size:r-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Et.Button.Danger.Primary:$t.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return r`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,nn={Default:n.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:c="default",danger:d=!1}=n,g=l(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":c,$buttonSizeStyle:"default",$buttonIsDanger:d};return e(en,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(tn,Object.assign({},s)),t("span",{children:r})]}))})),Small:n.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:c="default",danger:d=!1}=n,g=l(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":c,$buttonSizeStyle:"small",$buttonIsDanger:d};return e(en,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(tn,Object.assign({},s,{size:16})),t("span",{children:r})]}))}))};export{nn as Button};
//# sourceMappingURL=index.js.map
