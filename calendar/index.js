import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useMemo as a,useState as i,useRef as o,useImperativeHandle as l,useEffect as s}from"react";import c,{css as d,keyframes as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as f}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as m}from"@lifesg/react-icons/external";function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b=Array.isArray,S="object"==typeof y&&y&&y.Object===Object&&y,$="object"==typeof self&&self&&self.Object===Object&&self,v=S||$||Function("return this")(),F=v.Symbol,B=F,w=Object.prototype,x=w.hasOwnProperty,H=w.toString,O=B?B.toStringTag:void 0;var k=function(e){var t=x.call(e,O),n=e[O];try{e[O]=void 0;var r=!0}catch(e){}var a=H.call(e);return r&&(t?e[O]=n:delete e[O]),a},E=Object.prototype.toString;var A=k,M=function(e){return E.call(e)},C=F?F.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?A(e):M(e)};var z=L,T=function(e){return null!=e&&"object"==typeof e};var Y=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==z(e)},W=b,j=Y,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var _=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!j(e))||(N.test(e)||!R.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=L,I=P;var J,Z=function(e){if(!I(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=v["__core-js_shared__"],U=(J=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var G=function(e){return!!U&&U in e},q=Function.prototype.toString;var Q=Z,K=G,ee=P,te=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ne=/^\[object .+?Constructor\]$/,re=Function.prototype,ae=Object.prototype,ie=re.toString,oe=ae.hasOwnProperty,le=RegExp("^"+ie.call(oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!ee(e)||K(e))&&(Q(e)?le:ne).test(te(e))},ce=function(e,t){return null==e?void 0:e[t]};var de=function(e,t){var n=ce(e,t);return se(n)?n:void 0},ue=de(Object,"create"),he=ue;var fe=function(){this.__data__=he?he(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},me=ue,pe=Object.prototype.hasOwnProperty;var ye=function(e){var t=this.__data__;if(me){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pe.call(t,e)?t[e]:void 0},De=ue,be=Object.prototype.hasOwnProperty;var Se=ue;var $e=fe,ve=ge,Fe=ye,Be=function(e){var t=this.__data__;return De?void 0!==t[e]:be.call(t,e)},we=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Se&&void 0===t?"__lodash_hash_undefined__":t,this};function xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=$e,xe.prototype.delete=ve,xe.prototype.get=Fe,xe.prototype.has=Be,xe.prototype.set=we;var He=xe;var Oe=function(){this.__data__=[],this.size=0};var ke=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(ke(e[n][0],t))return n;return-1},Ae=Ee,Me=Array.prototype.splice;var Ce=Ee;var Le=Ee;var ze=Ee;var Te=Oe,Ye=function(e){var t=this.__data__,n=Ae(t,e);return!(n<0)&&(n==t.length-1?t.pop():Me.call(t,n,1),--this.size,!0)},We=function(e){var t=this.__data__,n=Ce(t,e);return n<0?void 0:t[n][1]},je=function(e){return Le(this.__data__,e)>-1},Re=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Te,Ne.prototype.delete=Ye,Ne.prototype.get=We,Ne.prototype.has=je,Ne.prototype.set=Re;var _e=Ne,Pe=de(v,"Map"),Ve=He,Ie=_e,Je=Pe;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var n=e.__data__;return Ze(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Xe;var Ge=Xe;var qe=Xe;var Qe=Xe;var Ke=function(){this.size=0,this.__data__={hash:new Ve,map:new(Je||Ie),string:new Ve}},et=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},tt=function(e){return Ge(this,e).get(e)},nt=function(e){return qe(this,e).has(e)},rt=function(e,t){var n=Qe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=Ke,at.prototype.delete=et,at.prototype.get=tt,at.prototype.has=nt,at.prototype.set=rt;var it=at;function ot(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(ot.Cache||it),n}ot.Cache=it;var lt=ot;var st=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/\\(\\)?/g,dt=function(e){var t=lt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(st,(function(e,n,r,a){t.push(r?a.replace(ct,"$1"):n||e)})),t}));var ut=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ht=b,ft=Y,gt=F?F.prototype:void 0,mt=gt?gt.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(ht(t))return ut(t,e)+"";if(ft(t))return mt?mt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},yt=pt;var Dt=b,bt=_,St=dt,$t=function(e){return null==e?"":yt(e)};var vt=Y;var Ft=function(e,t){return Dt(e)?e:bt(e,t)?[e]:St($t(e))},Bt=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var wt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[Bt(t[n++])];return n&&n==r?e:void 0};var xt=D((function(e,t,n){var r=null==e?void 0:wt(e,t);return void 0===r?n:r}));const Ht=(e,t,n)=>t?xt(n,t)||xt(e,t):n||e,Ot=(e,t)=>{const n=t||e.defaultValue;return xt(e.collections,n)};var kt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(kt||(kt={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Ot(Et,n[kt.colorScheme]);return n.options&&n.options.color?Ht(r,e,n.options.color):Ht(r,e)},Mt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}},Ct={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Lt=e=>Object.keys(Ct).reduce(((t,n)=>{const r=Ct[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),zt=Lt("max-width"),Tt=(Lt("min-width"),c.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${zt.mobileL} {
        min-width: 17.5rem;
    }
`);var Yt={exports:{}};Yt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},D={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=p;var $="$isDayjsObject",v=function(e){return e instanceof x||!(!e||!e[$])},F=function e(t,n,r){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(a=i),n&&(S[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var l=t.name;S[l]=t,a=l}return!r&&a&&(b=a),a||!r&&b},B=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},w=D;w.l=F,w.i=v,w.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=p.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=B(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!w.u(t)||t,d=w.p(e),f=function(e,t){var a=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,p=this.$M,y=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,p):f(0,p+1);case s:var b=this.$locale().weekStart||0,S=(m<b?m+7:m)-b;return f(r?y-S:y+(6-S),p);case l:case h:return g(D+"Hours",0);case o:return g(D+"Minutes",1);case i:return g(D+"Seconds",2);case a:return g(D+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=w.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var m=this.clone().set(h,1);m.$d[f](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=w.p(d),m=function(e){var t=B(f);return w.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return m(1);if(g===s)return m(7);var p=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*p;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return w.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,m=this,p=w.p(h),y=B(r),D=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return w.m(m,y)};switch(p){case u:g=S()/12;break;case c:g=S();break;case d:g=S()/3;break;case s:g=(b-D)/6048e5;break;case l:g=(b-D)/864e5;break;case o:g=b/n;break;case i:g=b/t;break;case a:g=b/e;break;default:g=b}return f?g:w.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),H=x.prototype;return B.prototype=H,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){H[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,x,B),e.$i=!0),B},B.locale=F,B.isDayjs=v,B.unix=function(e){return B(1e3*e)},B.en=S[b],B.Ls=S,B.p={},B}();var Wt=D(Yt.exports),jt={exports:{}};jt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),p=0;a&&!i||(p=i>0?i-1:f.getMonth());var y=l||0,D=s||0,b=c||0,S=d||0;return u?new Date(Date.UTC(m,p,g,y,D,b,S+60*u.offset*1e3)):n?new Date(Date.UTC(m,p,g,y,D,b,S)):new Date(m,p,g,y,D,b,S)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Rt=D(jt.exports),Nt={exports:{}};Nt.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var _t=D(Nt.exports),Pt={exports:{}};Pt.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vt=D(Pt.exports),It={exports:{}};It.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Jt,Zt,Xt,Ut=D(It.exports),Gt={exports:{}},qt=D(Gt.exports=(Jt={year:0,month:1,day:2,hour:3,minute:4,second:5},Zt={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=Zt[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Zt[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=Jt[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,l=a||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Wt.extend(_t),Wt.extend(Ut),Wt.extend(Vt),Wt.extend(Rt),Wt.extend(qt),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Wt(t).startOf("week");return Qt(n).map((e=>Kt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Kt(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Wt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Wt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Wt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?Wt(r):void 0,a?Wt(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Xt||(Xt={}));const Qt=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Kt=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},en=[1,3,5,7,8,10,12],tn=[4,6,9,11];var nn,rn,an,on;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":en.includes(i)?Math.min(a,31).toString():tn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Wt(e,n);return Wt(t,n).diff(r,"minute")},e.toDayjs=e=>e?Wt(e):Wt(),e.addMinutesToTime=(e,t,n="HH:mm")=>Wt(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Wt(e).isSame(Wt(t),n)}(nn||(nn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Wt(e).isBefore(r,"day"))||!(!a||!Wt(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Wt(e).isValid())return e}return""}}(rn||(rn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(an||(an={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(on||(on={}));const ln={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},sn=e=>t=>{var n;const r=t.theme,a=Ot(ln,r[kt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ht(a,e,r.options.designToken):Ht(a,e)},cn={InputBoxShadow:sn("InputBoxShadow"),InputErrorBoxShadow:sn("InputErrorBoxShadow"),ElevationBoxShadow:sn("ElevationBoxShadow"),Table:{Header:sn("Table.Header"),Cell:{Primary:sn("Table.Cell.Primary"),Secondary:sn("Table.Cell.Secondary"),Selected:sn("Table.Cell.Selected"),Hover:sn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:sn("Button.Danger.BackgroundColor"),Hover:sn("Button.Danger.Hover"),Primary:sn("Button.Danger.Primary"),Border:sn("Button.Danger.Border")}}},dn=c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,un=u`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,hn=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Mt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${un} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,fn=c(hn)`
    animation-delay: -0.45s;
`,gn=c(hn)`
    animation-delay: -0.3s;
`,mn=c(hn)`
    animation-delay: -0.15s;
`,pn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},yn={D1:{fontFamily:pn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:pn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:pn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:pn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:pn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:pn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:pn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:pn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:pn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Dn={D1:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},bn={collections:{base:yn,oneservice:{D1:{fontFamily:pn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:pn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:pn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:pn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:pn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:pn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:pn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:pn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:pn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:pn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Dn},defaultValue:"base"},Sn=e=>t=>{const n=t.theme,r=Ot(bn,n[kt.textStyleScheme]);return n.options&&n.options.textStyle?Ht(r,e,n.options.textStyle):Ht(r,e)},$n={D1:{fontFamily:Sn("D1.fontFamily"),fontSize:Sn("D1.fontSize"),fontWeight:Sn("D1.fontWeight"),lineHeight:Sn("D1.lineHeight"),letterSpacing:Sn("D1.letterSpacing"),fontVariant:Sn("D1.fontVariant")},D2:{fontFamily:Sn("D2.fontFamily"),fontSize:Sn("D2.fontSize"),fontWeight:Sn("D2.fontWeight"),lineHeight:Sn("D2.lineHeight"),letterSpacing:Sn("D2.letterSpacing"),fontVariant:Sn("D2.fontVariant")},D3:{fontFamily:Sn("D3.fontFamily"),fontSize:Sn("D3.fontSize"),fontWeight:Sn("D3.fontWeight"),lineHeight:Sn("D3.lineHeight"),letterSpacing:Sn("D3.letterSpacing"),fontVariant:Sn("D3.fontVariant")},D4:{fontFamily:Sn("D4.fontFamily"),fontSize:Sn("D4.fontSize"),fontWeight:Sn("D4.fontWeight"),lineHeight:Sn("D4.lineHeight"),letterSpacing:Sn("D4.letterSpacing"),fontVariant:Sn("D4.fontVariant")},DBody:{fontFamily:Sn("DBody.fontFamily"),fontSize:Sn("DBody.fontSize"),fontWeight:Sn("DBody.fontWeight"),lineHeight:Sn("DBody.lineHeight"),letterSpacing:Sn("DBody.letterSpacing"),fontVariant:Sn("DBody.fontVariant")},H1:{fontFamily:Sn("H1.fontFamily"),fontSize:Sn("H1.fontSize"),fontWeight:Sn("H1.fontWeight"),lineHeight:Sn("H1.lineHeight"),letterSpacing:Sn("H1.letterSpacing"),fontVariant:Sn("H1.fontVariant")},H2:{fontFamily:Sn("H2.fontFamily"),fontSize:Sn("H2.fontSize"),fontWeight:Sn("H2.fontWeight"),lineHeight:Sn("H2.lineHeight"),letterSpacing:Sn("H2.letterSpacing"),fontVariant:Sn("H2.fontVariant")},H3:{fontFamily:Sn("H3.fontFamily"),fontSize:Sn("H3.fontSize"),fontWeight:Sn("H3.fontWeight"),lineHeight:Sn("H3.lineHeight"),letterSpacing:Sn("H3.letterSpacing"),fontVariant:Sn("H3.fontVariant")},H4:{fontFamily:Sn("H4.fontFamily"),fontSize:Sn("H4.fontSize"),fontWeight:Sn("H4.fontWeight"),lineHeight:Sn("H4.lineHeight"),letterSpacing:Sn("H4.letterSpacing"),fontVariant:Sn("H4.fontVariant")},H5:{fontFamily:Sn("H5.fontFamily"),fontSize:Sn("H5.fontSize"),fontWeight:Sn("H5.fontWeight"),lineHeight:Sn("H5.lineHeight"),letterSpacing:Sn("H5.letterSpacing"),fontVariant:Sn("H5.fontVariant")},H6:{fontFamily:Sn("H6.fontFamily"),fontSize:Sn("H6.fontSize"),fontWeight:Sn("H6.fontWeight"),lineHeight:Sn("H6.lineHeight"),letterSpacing:Sn("H6.letterSpacing"),fontVariant:Sn("H6.fontVariant")},Body:{fontFamily:Sn("Body.fontFamily"),fontSize:Sn("Body.fontSize"),fontWeight:Sn("Body.fontWeight"),lineHeight:Sn("Body.lineHeight"),letterSpacing:Sn("Body.letterSpacing"),fontVariant:Sn("Body.fontVariant")},BodySmall:{fontFamily:Sn("BodySmall.fontFamily"),fontSize:Sn("BodySmall.fontSize"),fontWeight:Sn("BodySmall.fontWeight"),lineHeight:Sn("BodySmall.lineHeight"),letterSpacing:Sn("BodySmall.letterSpacing"),fontVariant:Sn("BodySmall.fontVariant")},XSmall:{fontFamily:Sn("XSmall.fontFamily"),fontSize:Sn("XSmall.fontSize"),fontWeight:Sn("XSmall.fontWeight"),lineHeight:Sn("XSmall.lineHeight"),letterSpacing:Sn("XSmall.letterSpacing"),fontVariant:Sn("XSmall.fontVariant")}},vn=[pn.OpenSans,pn.PlusJakartaSans],Fn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Bn=(e,t)=>n=>{var r;const a=$n[e].fontFamily(n),i=$n[e].fontWeight(n),o=vn.find((e=>Object.values(e).includes(a)));return o?d`
                font-family: ${Fn(o,t)||Fn(o,i)||a};
                font-weight: normal !important;
            `:d`
            font-family: ${a};
            font-weight: ${null!==(r=wn(t)||i)&&void 0!==r?r:"normal"};
        `},wn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xn=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Hn=(e,t,n=!1)=>r=>{const a=$n[e],i=a.fontSize(r);return d`
            ${Bn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${d`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},On=(e=!1,t=!1,n=void 0)=>t?d`
            display: block;
            ${xn(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${xn(n)}
        `;var kn;!function(e){e.D1=c.h1`
        ${e=>d`
                ${Hn("D1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>d`
                ${Hn("D2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>d`
                ${Hn("D3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>d`
                ${Hn("D4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>d`
                ${Hn("DBody",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>d`
                ${Hn("H1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>d`
                ${Hn("H2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>d`
                ${Hn("H3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>d`
                ${Hn("H4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>d`
                ${Hn("H5",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>d`
                ${Hn("H6",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>d`
                ${Hn("Body",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>d`
                ${Hn("BodySmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>d`
                ${Hn("XSmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Mn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Mn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(kn||(kn={}));const En=c.a`
    ${e=>d`
            ${Hn(e.textStyle,e.weight)}
            color: ${Mt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Mt.Secondary};

                svg {
                    color: ${Mt.Secondary};
                }
            }
        `}
`,An=c(m)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mn=n=>{var{external:r=!1,children:a}=n,i=p(n,["external","children"]);return e(En,Object.assign({},i,{children:[a,r&&t(An,{})]}))};var Cn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Cn||(Cn={}));const Ln=c.button`
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
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?cn.Button.Danger.Border:Mt.Primary};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:Mt.Primary};
                `;case"light":return d`
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid ${Mt.Neutral[5]};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:Mt.Primary};
                `;case"disabled":return d`
                    background-color: ${Mt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Mt.Neutral[3]};
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:Mt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?cn.Button.Danger.Hover:Mt.Secondary};
                    }
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?cn.Button.Danger.BackgroundColor:Mt.Primary};
                    border: 1px solid transparent;

                    ${zt.mobileL} {
                        width: 100%;
                    }

                    color: ${Mt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    ${Hn("H5","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    ${Hn("H4","semibold")}

                    ${zt.mobileS} {
                        height: auto;
                    }
                `}
`,zn=c((({color:n,className:r,size:a=18})=>e(dn,Object.assign({className:r,$size:a,$color:n,"data-testid":"component-loading-spinner"},{children:[t(hn,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(fn,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(gn,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(mn,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?cn.Button.Danger.Primary:Mt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Mt.Neutral[3](e);break;default:t=Mt.Neutral[8](e)}return d`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Tn={Default:r.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=p(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Ln,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(zn,Object.assign({},d)),t("span",{children:a})]}))})),Small:r.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=p(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Ln,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(zn,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},Yn=c.button`
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
                background-color: ${Mt.Neutral[7]};
            `}
    }
`,Wn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,l=p(e,["children","focusHighlight","focusOutline","type"]);return t(Yn,Object.assign({ref:n,$outline:i,$highlight:a,type:o},l,{children:r}))})),jn=d`
    color: ${Mt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Rn=c(f)`
    ${jn}
`,Nn=c(g)`
    ${jn}
`,_n=c(h)`
    ${jn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Pn=c.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Vn=c.div`
    display: flex;
    flex: 1;
    position: relative;
`,In=c.div`
    isolation: isolate;
    width: 100%;
`,Jn=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Mt.Neutral[8]};

    ${e=>{if(!e.$visible)return d`
                display: none;
            `}}
`,Zn=c.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Xn=c.div`
    display: flex;
`,Un=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?d`
                display: none;
            `:e.$expanded?d`
                ${_n} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Gn=c.p`
    ${Hn("H5","regular")}
`,qn=c.div`
    display: flex;
`,Qn=c(Wn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Kn=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,er=c(Tn.Small)`
    flex: 1;
`,tr=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return d`
                    gap: 0.5rem 2.5rem;
                `;case"input":return d`
                    gap: 0.5rem 1rem;
                `}}}
`,nr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?d`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?d`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return d`
                    background-color: ${Mt.Accent.Light[6](e)};
                `;case"selected-month":return d`
                    background-color: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}}
`,rr=c(kn.H5)`
    ${e=>{if(e.$disabledDisplay)return d`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return d`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-month":return d`
                    ${Hn("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `}}}
`,ar=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=a((()=>Xt.generateMonths(Wt(e))),[e]),g=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,a="end"===n&&r&&e.isBefore(r,"month")&&s;return t||a},m=e=>{const t=e.format("MMMM"),n=(r=e,!Xt.isWithinRange(r,c?Wt(c):void 0,d?Wt(d):void 0,"month"));var r;const a=o.isSame(e,"month")?"selected-month":Wt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||g(e),interactive:!n||u,month:t,variant:a}};return f.length?t(tr,Object.assign({$type:l},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=m(e);return t(nr,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||h(e)})(e,!r)},{children:t(rr,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},ir=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return d`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return d`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,or=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?d`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?d`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return d`
                    background: ${Mt.Accent.Light[6](e)};
                `;case"selected-year":return d`
                    background: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}};
`,lr=c(kn.H5)`
    ${e=>{if(e.$disabledDisplay)return d`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return d`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-year":return d`
                    ${Hn("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `;case"other-decade":return d`
                    color: ${Mt.Neutral[4](e)};
                `}}}
`,sr=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=a((()=>Xt.generateDecadeOfYears(Wt(e))),[e]),g=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,a="end"===n&&r&&e.isBefore(r,"year")&&s;return t||a},m=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(a=e,!Xt.isWithinRange(a,c?Wt(c):void 0,d?Wt(d):void 0,"year"));var a;const i=t?"other-decade":o.isSame(e,"year")?"selected-year":Wt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||g(e),interactive:!r||u,year:n,variant:i}};return f.length?t(ir,Object.assign({$type:l},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=m(e);return t(or,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||h(e)})(e,!r)},{children:t(lr,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},cr=r.forwardRef(((r,a)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:f,currentFocus:g,selectedStartDate:m,selectedEndDate:y,selectWithinRange:D,dynamicHeight:b=!1,allowDisabledSelection:S,onCalendarDateChange:$,withButton:v,doneButtonDisabled:F,onDismiss:B,showNavigationHeader:w=!0,getLeftArrowDate:x,getRightArrowDate:H,isLeftArrowDisabled:O,isRightArrowDisabled:k,getMonthHeaderLabel:E,getYearHeaderLabel:A}=r,M=p(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,L]=i(nn.toDayjs(d)),[z,T]=i(nn.toDayjs(d)),[Y,W]=i("default"),j=o(null),R=o(null),N=o();l(a,(()=>({defaultView(){W("default")},resetView(){const e=nn.toDayjs(d);L(e),T(e),W("default")},setCalendarDate(e){const t=nn.toDayjs(e);L(t),T(t)}}))),s((()=>{const e=nn.toDayjs(d);L(e),T(e)}),[d]),s((()=>{X(z)}),[z]);const _=()=>{"month-options"!==Y?(W("month-options"),N.current.focus()):(W("default"),L(z))},P=()=>{"default"!==Y?(W("default"),L(z)):W("year-options")},V=()=>{N.current.focus();const e=x?x(C):C.subtract(1,"month");switch(Y){case"default":T(e),L(e);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},I=()=>{N.current.focus();const e=H?H(C):C.add(1,"month");switch(Y){case"default":T(e),L(e);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},J=e=>{L(e),T(e),v||W("default")},Z=()=>{const e=nn.toDayjs(d);L(e),T(e),"default"===Y?U("reset"):W("default")},X=e=>{$&&$(e)},U=e=>{B&&B(e)},G=()=>{if(!h||S)return!1;const e=Wt(h);return"month-options"===Y?!Xt.isPreviousYearWithinRange(C,e):"year-options"===Y?!Xt.isPreviousDecadeWithinRange(C,e):O?O(C):!Xt.isPreviousMonthWithinRange(C,e)},q=()=>{if(!f||S)return!1;const e=Wt(f);return"month-options"===Y?!Xt.isNextYearWithinRange(C,e):"year-options"===Y?!Xt.isNextDecadeWithinRange(C,e):k?k(C):!Xt.isNextMonthWithinRange(C,e)},Q=()=>{if("year-options"===Y){const{beginDecade:e,endDecade:t}=Xt.getStartEndDecade(C);return`${e} to ${t}`}return A?A(C):C.format("YYYY")},K=()=>{const r=E?E(C):C.format("MMM");return e(n,{children:[e(Un,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===Y,$visible:"default"===Y,id:"month-dropdown",onClick:_},{children:[t(Gn,{children:r}),t(_n,{})]})),e(Un,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==Y,id:"year-dropdown",onClick:P},{children:[t(Gn,{children:Q()}),t(_n,{})]}))]})},ee=()=>{switch(Y){case"month-options":return t(ar,{type:u,calendarDate:C,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:m,selectedEndDate:y,viewCalendarDate:z,isNewSelection:D,onMonthSelect:J,allowDisabledSelection:S});case"year-options":return t(sr,{type:u,calendarDate:C,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:m,selectedEndDate:y,viewCalendarDate:z,isNewSelection:D,onYearSelect:J,allowDisabledSelection:S});default:return null}};return e(Pn,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[w&&e(Zn,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Xn,{children:K()}),e(qn,{children:[t(Qn,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Rn,{})})),t(Qn,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:I},{children:t(Nn,{})}))]})]})),t(Vn,{children:(()=>{const r="function"==typeof c?c({calendarDate:z,currentView:Y}):c;return e(n,b?{children:["default"===Y&&r,ee()]}:{children:[t(In,{children:r}),t(Jn,Object.assign({$visible:"default"!==Y},{children:ee()}))]})})()}),(()=>{if(!v)return;const n=!!("default"===Y)&&F;return e(Kn,{children:[t(er,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(er,Object.assign({"data-testid":"done-button",ref:j,type:"button",onClick:()=>{n||(L(z),"default"===Y?U("confirmed"):W("default"))},disabled:n},{children:"Done"}))]})})()]}))})),dr=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ur=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,hr=c.div`
    grid-column: 1 / -1;
    display: flex;
`;c.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const fr=c.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return d`
                    left: 0;
                `;case"right":return d`
                    right: 0;
                `}}}
`,gr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;c(kn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return d`
                ${Hn("H5","semibold")};
                color: ${Mt.Accent.Light[2]};
            `;if(t)return d`
                color: ${Mt.Neutral[4]};
            `;if(n)return d`
                ${Hn("H5","semibold")};
                color: ${Mt.Primary};
            `;switch(r){case"other-month":return d`
                    color: ${Mt.Neutral[4]};
                `;case"today":return d`
                    color: ${Mt.Neutral[3]};
                `;case"default":return d`
                    color: ${Mt.Neutral[1]};
                `}}}
`,c(fr)`
    ${e=>{const{$selected:t}=e;if(t)return d`
                border-top: 1px solid ${Mt.Accent.Light[4]};
                border-bottom: 1px solid ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?d`
                border-top: 1px dashed ${Mt.Accent.Light[4]};
                border-bottom: 1px dashed ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[6]};
            `:n?d`
                background-color: ${Mt.Accent.Light[4]};
            `:void 0}}
`,c(gr)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?d`
                background: ${Mt.Accent.Light[5]};
                border: 1px solid ${Mt.Primary};
            `:t?d`
                box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                border: 1px solid ${Mt.Accent.Light[1]};
                background-color: ${Mt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?d`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                    background-color: ${Mt.Neutral[8]};
                }
            `:n?d`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?d`
                border: 1px solid ${Mt.Accent.Light[1]};
                background: ${Mt.Accent.Light[4]};

                :hover {
                    background: ${Mt.Accent.Light[4]};
                }
            `:t?d`
                color: ${Mt.Neutral[4]};
            `:"today"===r?d`
                    background: ${Mt.Accent.Light[5]};
                `:void 0}}
`;const mr=e=>{let t=Mt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Mt.Accent.Light[5];break;case"hover-dash":t=Mt.Accent.Light[6],n=`1px dashed ${Mt.Accent.Light[4](e)}`;break;case"hover-current":t=Mt.Neutral[8],n=`1px solid ${Mt.Primary(e)}`;break;case"selected":t=Mt.Accent.Light[5],n=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"selected-outline":t=Mt.Accent.Light[5],n=`1px solid ${Mt.Primary(e)}`;break;case"overlap":t=Mt.Accent.Light[4],n=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Mt.Accent.Light[4],n=`1px solid ${Mt.Primary(e)}`}return{color:t,border:n}},pr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,yr=c.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=mr(e);return d`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Dr=c(yr)`
    left: 0;
`,br=c(yr)`
    right: 0;
`,Sr=c.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Mt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,$r=c(Sr)`
    left: 0;
`,vr=c(Sr)`
    right: 0;
`,Fr=c.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=mr(e);return d`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&d`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Br=c(Fr)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,wr=c(Fr)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,xr=c(kn.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?d`
                    ${Hn("H5","semibold")};
                    color: ${Mt.Accent.Light[2]};
                `:"hidden"===n?d`
                    visibility: hidden;
                `:d`
                color: ${Mt.Neutral[4]};
            `;switch(n){case"selected":return d`
                    ${Hn("H5","semibold")};
                    color: ${Mt.Primary};
                `;case"current":return d`
                    color: ${Mt.Neutral[3]};
                `;case"unavailable":return d`
                    color: ${Mt.Neutral[4]};
                `;case"hidden":return d`
                    visibility: hidden;
                `;default:return d`
                    color: ${Mt.Neutral[1]};
                `}}}
`,Hr=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:l,labelType:s,disabled:c,interactive:d,date:u,onSelect:h,onHover:f,onHoverEnd:g})=>e(pr,{children:[t($r,{$shadow:n&&o}),t(Dr,{$type:n,$shadow:n&&o}),t(Br,{$type:a,$shadow:a&&l}),t(vr,{$shadow:r&&o}),t(br,{$type:r,$shadow:r&&o}),t(wr,{$type:i,$shadow:i&&l}),t(xr,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{g&&g(u)}},{children:u.date()}))]}),Or=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:f,onHover:g})=>{const m=Xt.isDisabledDay(e,c,l,s),p=!m||d,y=()=>{const e=Wt(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let l,s,c,d;return"start"===i&&a&&t&&(r&&n?(c=o,d=a):(l=o,s=r||a)),"end"===i&&r&&n&&(a&&t?(c=r,d=o):(l=a||r,s=o)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:d}},D={date:e,calendarDate:n,disabled:m,interactive:p,onSelect:()=>{f(e,!p)},onHover:()=>{g(e.format("YYYY-MM-DD"),!p)}};return t(Hr,Object.assign({},D,(()=>{const t={};if(n.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(Wt().isSame(e,"day")&&!m)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),o=e.isSame(a,"day");return h&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),o||(t.bgRight="selected")),t)})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};Wt.extend(_t);const kr=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:l,selectedEndDate:s,onSelect:c,onHover:d,isNewSelection:u,minDate:h,maxDate:f,allowDisabledSelection:g,showActiveMonthDaysOnly:m})=>{const p=a((()=>Xt.generateDays(n)),[n]),[y,D]=i(""),b=(e,t)=>{t&&!g||c(e)},S=(e,t)=>{t&&!g||(D(e),d(e))},$=()=>{D(""),d("")};return e(dr,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,n)=>t(ur,{children:t(kn.H6,Object.assign({weight:"semibold"},{children:Wt(e).format("ddd")}))},`week-day-${n}`))),p.map(((e,a)=>t(hr,Object.assign({onMouseLeave:$},{children:e.map(((e,a)=>t(Or,{date:e,calendarDate:n,startDate:l,endDate:s,hoverDate:y,currentFocus:r,minDate:h,maxDate:f,disabledDates:o,allowDisabledSelection:g,isNewSelection:u,showActiveMonthDaysOnly:m,onSelect:b,onHover:S},`day-${a}`)))}),a)))]}))},Er=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Xt.isDisabledDay(e,l,i,o),f=!h||s,{start:g,end:m}=r?Xt.getFixedRangeStartEnd(nn.toDayjs(r),c):{start:void 0,end:void 0},{start:p,end:y}=a?Xt.getFixedRangeStartEnd(nn.toDayjs(a),c):{start:void 0,end:void 0},D=r&&e.isBetween(g,m,"day","[]"),b=a&&e.isBetween(p,y,"day","[]"),S=D&&e.isSame(g,"day")||b&&e.isSame(p,"day"),$=D&&e.isSame(m,"day")||b&&e.isSame(y,"day"),v=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},F={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{d(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Hr,Object.assign({},F,(()=>{const t={};return D||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":Wt().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&v(t,"hover-dash",n===p,n===y),D&&v(t,"selected",n===g,n===m),D&&b&&v(t,"overlap",S,$),n===g&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===p&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,p>=g&&p<m&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Ar=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:l,onHover:s,minDate:c,maxDate:d,allowDisabledSelection:u,numberOfDays:h})=>{const f=a((()=>Xt.generateDays(n)),[n]),[g,m]=i(""),p=(e,t)=>{t&&!u||(l(e),e&&!Wt(e).isSame(e,"month")&&m(""))},y=(e,t)=>{t&&!u||(m(e),s(e))},D=()=>{m(""),s("")};return e(dr,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(ur,{children:t(kn.H6,Object.assign({weight:"semibold"},{children:Wt(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,a)=>t(hr,Object.assign({onMouseLeave:D},{children:e.map(((e,a)=>t(Er,{date:e,calendarDate:n,selectedDate:o,hoverDate:g,minDate:c,maxDate:d,disabledDates:r,allowDisabledSelection:u,onSelect:p,onHover:y,numberOfDays:h},`day-${a}`)))}),a)))]}))},Mr=c.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Mt.Neutral[8]};

    ${e=>{if("input"===e.$type)return d`
                border: 1px solid ${Mt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Cr=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:d})=>{const u=Xt.isDisabledDay(e,l,i,o),h=!u||s,{start:f,end:g}=Xt.getWeekStartEnd(nn.toDayjs(r)),{start:m,end:p}=Xt.getWeekStartEnd(nn.toDayjs(a)),y=r&&e.isBetween(f,g,"day","[]"),D=a&&e.isBetween(m,p,"day","[]"),b=y&&e.isSame(f)||D&&e.isSame(m),S=y&&e.isSame(g)||D&&e.isSame(p),$={date:e,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Hr,Object.assign({},$,(()=>{const t={};return y||D?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":Wt().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&D?(t="hover-current",e.shadow=!0,e.circleShadow=b||S):y?t="selected-outline":D&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,S?e.circleRight=t:e.bgRight=t),e})()))},Lr=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:l,onHover:s,minDate:c,maxDate:d,allowDisabledSelection:u})=>{const h=a((()=>Xt.generateDays(n)),[n]),[f,g]=i(""),m=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");l(n),e&&!Wt(e).isSame(n,"month")&&g("")},p=(e,t)=>{t&&!u||(g(e),s(e))},y=()=>{g(""),s("")};return e(dr,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(ur,{children:t(kn.H6,Object.assign({weight:"semibold"},{children:Wt(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,a)=>t(hr,Object.assign({onMouseLeave:y},{children:e.map(((e,a)=>t(Cr,{date:e,calendarDate:n,selectedDate:o,hoverDate:f,minDate:c,maxDate:d,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:p},`day-${a}`)))}),a)))]}))},zr=r.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:i,value:s,endValue:c,currentFocus:d,withButton:u,variant:h,minDate:f,maxDate:g,allowDisabledSelection:m,type:p="standalone",selectWithinRange:y=!0,initialCalendarDate:D,numberOfDays:b,showActiveMonthDaysOnly:S=!1},$)=>{const v=o(),F=o(void 0);l($,(()=>({reset(){v.current.resetView()},setCalendarDate(e){v.current.setCalendarDate(e)}})));const B=e=>{const t=e.format("YYYY-MM-DD");v.current.setCalendarDate(t),x(t)},w=e=>{H(e)},x=e=>{r&&r(e)},H=e=>{a&&a(e)},O=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(Mr,Object.assign({$type:p},{children:t(cr,Object.assign({type:p,ref:v,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!c;break;case"week":e=!s&&!c}return e})(),onDismiss:i,minDate:f,maxDate:g,selectWithinRange:y,currentFocus:d,selectedStartDate:s,selectedEndDate:c,allowDisabledSelection:m,onCalendarDateChange:e=>{F.current&&F.current.isSame(e,"month")||O(e),F.current=e},initialCalendarDate:D},{children:({calendarDate:n})=>(n=>{switch(h){case"week":return t(Lr,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:f,maxDate:g,allowDisabledSelection:m,onSelect:B,onHover:w});case"fixed-range":return t(Ar,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:f,maxDate:g,allowDisabledSelection:m,onSelect:B,onHover:w,numberOfDays:b});default:return t(kr,{calendarDate:n,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:c,minDate:f,maxDate:g,isNewSelection:y,allowDisabledSelection:m,showActiveMonthDaysOnly:S,onSelect:B,onHover:w})}})(n)}))}))}));r.forwardRef(((e,n)=>{var{width:r}=e,a=p(e,["width"]);return t(Tt,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(zr,Object.assign({ref:n},a))}))}));const Tr=e=>{var{className:n,styleType:r="bordered",value:a,onSelect:o}=e,l=p(e,["className","styleType","value","onSelect"]);const[c,d]=i(a);return s((()=>{d(a)}),[a]),t(Yr,Object.assign({className:n,$hasBorder:"bordered"===r},{children:t(zr,Object.assign({type:"standalone",value:c,initialCalendarDate:c,onSelect:e=>{d(e),null==o||o(e)}},l))}))},Yr=c.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return d`
                border: 1px solid ${Mt.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{Tr as Calendar};
//# sourceMappingURL=index.js.map
