import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import d,{keyframes as c,css as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as m}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as b}from"@lifesg/react-icons/external";function f(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,D="object"==typeof y&&y&&y.Object===Object&&y,x="object"==typeof self&&self&&self.Object===Object&&self,v=D||x||Function("return this")(),S=v.Symbol,w=S,$=Object.prototype,B=$.hasOwnProperty,E=$.toString,C=w?w.toStringTag:void 0;var A=function(e){var r=B.call(e,C),t=e[C];try{e[C]=void 0;var n=!0}catch(e){}var a=E.call(e);return n&&(r?e[C]=t:delete e[C]),a},H=Object.prototype.toString;var k=A,O=function(e){return H.call(e)},z=S?S.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?k(e):O(e)};var L=M,Y=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==L(e)},W=F,j=T,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var N=function(e,r){if(W(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!j(e))||(_.test(e)||!R.test(e)||null!=r&&e in Object(r))};var I=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},P=M,V=I;var J,Z=function(e){if(!V(e))return!1;var r=P(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},X=v["__core-js_shared__"],U=(J=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var G=function(e){return!!U&&U in e},q=Function.prototype.toString;var Q=Z,K=G,ee=I,re=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},te=/^\[object .+?Constructor\]$/,ne=Function.prototype,ae=Object.prototype,ie=ne.toString,oe=ae.hasOwnProperty,se=RegExp("^"+ie.call(oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var le=function(e){return!(!ee(e)||K(e))&&(Q(e)?se:te).test(re(e))},de=function(e,r){return null==e?void 0:e[r]};var ce=function(e,r){var t=de(e,r);return le(t)?t:void 0},ue=ce(Object,"create"),he=ue;var ge=function(){this.__data__=he?he(null):{},this.size=0};var me=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},be=ue,fe=Object.prototype.hasOwnProperty;var ye=function(e){var r=this.__data__;if(be){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return fe.call(r,e)?r[e]:void 0},pe=ue,Fe=Object.prototype.hasOwnProperty;var De=ue;var xe=ge,ve=me,Se=ye,we=function(e){var r=this.__data__;return pe?void 0!==r[e]:Fe.call(r,e)},$e=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=De&&void 0===r?"__lodash_hash_undefined__":r,this};function Be(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Be.prototype.clear=xe,Be.prototype.delete=ve,Be.prototype.get=Se,Be.prototype.has=we,Be.prototype.set=$e;var Ee=Be;var Ce=function(){this.__data__=[],this.size=0};var Ae=function(e,r){return e===r||e!=e&&r!=r};var He=function(e,r){for(var t=e.length;t--;)if(Ae(e[t][0],r))return t;return-1},ke=He,Oe=Array.prototype.splice;var ze=He;var Me=He;var Le=He;var Ye=Ce,Te=function(e){var r=this.__data__,t=ke(r,e);return!(t<0)&&(t==r.length-1?r.pop():Oe.call(r,t,1),--this.size,!0)},We=function(e){var r=this.__data__,t=ze(r,e);return t<0?void 0:r[t][1]},je=function(e){return Me(this.__data__,e)>-1},Re=function(e,r){var t=this.__data__,n=Le(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function _e(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_e.prototype.clear=Ye,_e.prototype.delete=Te,_e.prototype.get=We,_e.prototype.has=je,_e.prototype.set=Re;var Ne=_e,Ie=ce(v,"Map"),Pe=Ee,Ve=Ne,Je=Ie;var Ze=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Xe=function(e,r){var t=e.__data__;return Ze(r)?t["string"==typeof r?"string":"hash"]:t.map},Ue=Xe;var Ge=Xe;var qe=Xe;var Qe=Xe;var Ke=function(){this.size=0,this.__data__={hash:new Pe,map:new(Je||Ve),string:new Pe}},er=function(e){var r=Ue(this,e).delete(e);return this.size-=r?1:0,r},rr=function(e){return Ge(this,e).get(e)},tr=function(e){return qe(this,e).has(e)},nr=function(e,r){var t=Qe(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function ar(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ar.prototype.clear=Ke,ar.prototype.delete=er,ar.prototype.get=rr,ar.prototype.has=tr,ar.prototype.set=nr;var ir=ar;function or(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(or.Cache||ir),t}or.Cache=ir;var sr=or;var lr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dr=/\\(\\)?/g,cr=function(e){var r=sr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(lr,(function(e,t,n,a){r.push(n?a.replace(dr,"$1"):t||e)})),r}));var ur=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},hr=F,gr=T,mr=S?S.prototype:void 0,br=mr?mr.toString:void 0;var fr=function e(r){if("string"==typeof r)return r;if(hr(r))return ur(r,e)+"";if(gr(r))return br?br.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},yr=fr;var pr=F,Fr=N,Dr=cr,xr=function(e){return null==e?"":yr(e)};var vr=T;var Sr=function(e,r){return pr(e)?e:Fr(e,r)?[e]:Dr(xr(e))},wr=function(e){if("string"==typeof e||vr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var $r=function(e,r){for(var t=0,n=(r=Sr(r,e)).length;null!=e&&t<n;)e=e[wr(r[t++])];return t&&t==n?e:void 0};var Br=p((function(e,r,t){var n=null==e?void 0:$r(e,r);return void 0===n?t:n}));const Er=(e,r,t)=>r?Br(t,r)||Br(e,r):t||e,Cr=(e,r)=>{const t=r||e.defaultValue;return Br(e.collections,t)};var Ar;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ar||(Ar={}));const Hr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kr=e=>r=>{const t=r.theme,n=Cr(Hr,t[Ar.colorScheme]);return t.options&&t.options.color?Er(n,e,t.options.color):Er(n,e)},Or={Brand:{1:kr("Brand.1"),2:kr("Brand.2"),3:kr("Brand.3"),4:kr("Brand.4"),5:kr("Brand.5"),6:kr("Brand.6")},Primary:kr("Primary"),PrimaryDark:kr("PrimaryDark"),Secondary:kr("Secondary"),Accent:{Light:{1:kr("Accent.Light.1"),2:kr("Accent.Light.2"),3:kr("Accent.Light.3"),4:kr("Accent.Light.4"),5:kr("Accent.Light.5"),6:kr("Accent.Light.6")},Dark:{1:kr("Accent.Dark.1"),2:kr("Accent.Dark.2"),3:kr("Accent.Dark.3")}},Neutral:{1:kr("Neutral.1"),2:kr("Neutral.2"),3:kr("Neutral.3"),4:kr("Neutral.4"),5:kr("Neutral.5"),6:kr("Neutral.6"),7:kr("Neutral.7"),8:kr("Neutral.8")},Validation:{Green:{Text:kr("Validation.Green.Text"),Icon:kr("Validation.Green.Icon"),Border:kr("Validation.Green.Border"),Background:kr("Validation.Green.Background")},Orange:{Text:kr("Validation.Orange.Text"),Icon:kr("Validation.Orange.Icon"),Border:kr("Validation.Orange.Border"),Background:kr("Validation.Orange.Background"),Badge:kr("Validation.Orange.Badge")},Red:{Text:kr("Validation.Red.Text"),Icon:kr("Validation.Red.Icon"),Border:kr("Validation.Red.Border"),Background:kr("Validation.Red.Background")},Blue:{Text:kr("Validation.Blue.Text"),Icon:kr("Validation.Blue.Icon"),Border:kr("Validation.Blue.Border"),Background:kr("Validation.Blue.Background")}},Shadow:{Accent:kr("Shadow.Accent"),Red:kr("Shadow.Red"),Elevation:kr("Shadow.Elevation")}},zr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mr=e=>Object.keys(zr).reduce(((r,t)=>{const n=zr[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),Lr=Mr("max-width"),Yr=(Mr("min-width"),d.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Lr.mobileL} {
        min-width: 17.5rem;
    }
`);var Tr={exports:{}};Tr.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",D={};D[F]=f;var x="$isDayjsObject",v=function(e){return e instanceof B||!(!e||!e[x])},S=function e(r,t,n){var a;if(!r)return F;if("string"==typeof r){var i=r.toLowerCase();D[i]&&(a=i),t&&(D[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;D[s]=r,a=s}return!n&&a&&(F=a),a||!n&&F},w=function(e,r){if(v(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new B(t)},$=p;$.l=S,$.i=v,$.w=function(e,r){return w(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var B=function(){function f(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if($.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return $},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(e,r){var t=w(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return w(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<w(e)},y.$g=function(e,r,t){return $.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!$.u(r)||r,c=$.p(e),g=function(e,r){var a=$.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},m=function(e,r){return $.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var F=this.$locale().weekStart||0,D=(b<F?b+7:b)-F;return g(n?y-D:y+(6-D),f);case s:case h:return m(p+"Hours",0);case o:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case a:return m(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=$.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[$.p(e)]()},y.add=function(n,c){var h,g=this;n=Number(n);var m=$.p(c),b=function(e){var r=w(g);return $.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[m]||1,y=this.$d.getTime()+n*f;return $.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=$.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return $.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return $.s(r.$y,4,"0");case"M":return s+1;case"MM":return $.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return $.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return $.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,o,!0);case"A":return m(i,o,!1);case"m":return String(o);case"mm":return $.s(o,2,"0");case"s":return String(r.$s);case"ss":return $.s(r.$s,2,"0");case"SSS":return $.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,g){var m,b=this,f=$.p(h),y=w(n),p=(y.utcOffset()-this.utcOffset())*r,F=this-y,D=function(){return $.m(b,y)};switch(f){case u:m=D()/12;break;case d:m=D();break;case c:m=D()/3;break;case l:m=(F-p)/6048e5;break;case s:m=(F-p)/864e5;break;case o:m=F/t;break;case i:m=F/r;break;case a:m=F/e;break;default:m=F}return g?m:$.a(m)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=S(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return $.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),E=B.prototype;return w.prototype=E,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),w.extend=function(e,r){return e.$i||(e(r,B,w),e.$i=!0),w},w.locale=S,w.isDayjs=v,w.unix=function(e){return w(1e3*e)},w.en=D[F],w.Ls=D,w.p={},w}();var Wr=p(Tr.exports),jr={exports:{}};jr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],g=c&&c[1];o[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=o||(a||i?1:g.getDate()),b=a||g.getFullYear(),f=0;a&&!i||(f=i>0?i-1:g.getMonth());var y=s||0,p=l||0,F=d||0,D=c||0;return u?new Date(Date.UTC(b,f,m,y,p,F,D+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,y,p,F,D)):new Date(b,f,m,y,p,F,D)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Rr=p(jr.exports),_r={exports:{}};_r.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Nr=p(_r.exports),Ir={exports:{}};Ir.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Pr=p(Ir.exports),Vr={exports:{}};Vr.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Jr,Zr,Xr,Ur=p(Vr.exports),Gr={exports:{}},qr=p(Gr.exports=(Jr={year:0,month:1,day:2,hour:3,minute:4,second:5},Zr={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Zr[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Zr[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Jr[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Wr.extend(Nr),Wr.extend(Ur),Wr.extend(Pr),Wr.extend(Rr),Wr.extend(qr),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Wr(r).startOf("week");return Qr(t).map((e=>Kr(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Kr(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Wr(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Wr(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Wr(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?Wr(n):void 0,a?Wr(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Xr||(Xr={}));const Qr=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Kr=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},et=[1,3,5,7,8,10,12],rt=[4,6,9,11];var tt,nt,at,it;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":et.includes(i)?Math.min(a,31).toString():rt.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Wr(e,t);return Wr(r,t).diff(n,"minute")},e.toDayjs=e=>e?Wr(e):Wr(),e.addMinutesToTime=(e,r,t="HH:mm")=>Wr(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Wr(e).isSame(Wr(r),t)}(tt||(tt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Wr(e).isBefore(n,"day"))||!(!a||!Wr(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Wr(e).isValid())return e}return""}}(nt||(nt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(at||(at={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(it||(it={}));const ot=d.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,st=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lt=d.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${st} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,dt=d(lt)`
    animation-delay: -0.45s;
`,ct=d(lt)`
    animation-delay: -0.3s;
`,ut=d(lt)`
    animation-delay: -0.15s;
`,ht=(e,r,t)=>Br(t,r)||Br(e,r),gt=(e,r)=>{const t=r||e.defaultValue;return Br(e.collections,t)},mt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},bt=e=>r=>{const t=r.theme,n=gt(mt,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?ht(n,e,t.overrides.primitiveColour):n[e]},ft={"primary-10":bt("primary-10"),"primary-20":bt("primary-20"),"primary-30":bt("primary-30"),"primary-40":bt("primary-40"),"primary-50":bt("primary-50"),"primary-60":bt("primary-60"),"primary-70":bt("primary-70"),"primary-80":bt("primary-80"),"primary-90":bt("primary-90"),"primary-95":bt("primary-95"),"primary-100":bt("primary-100"),"secondary-10":bt("secondary-10"),"secondary-20":bt("secondary-20"),"secondary-30":bt("secondary-30"),"secondary-40":bt("secondary-40"),"secondary-50":bt("secondary-50"),"secondary-60":bt("secondary-60"),"secondary-70":bt("secondary-70"),"secondary-80":bt("secondary-80"),"secondary-90":bt("secondary-90"),"secondary-95":bt("secondary-95"),"secondary-100":bt("secondary-100"),"neutral-10":bt("neutral-10"),"neutral-20":bt("neutral-20"),"neutral-30":bt("neutral-30"),"neutral-40":bt("neutral-40"),"neutral-50":bt("neutral-50"),"neutral-60":bt("neutral-60"),"neutral-70":bt("neutral-70"),"neutral-80":bt("neutral-80"),"neutral-90":bt("neutral-90"),"neutral-95":bt("neutral-95"),"neutral-100":bt("neutral-100"),"success-10":bt("success-10"),"success-20":bt("success-20"),"success-30":bt("success-30"),"success-40":bt("success-40"),"success-50":bt("success-50"),"success-60":bt("success-60"),"success-70":bt("success-70"),"success-80":bt("success-80"),"success-90":bt("success-90"),"success-95":bt("success-95"),"success-100":bt("success-100"),"warning-10":bt("warning-10"),"warning-20":bt("warning-20"),"warning-30":bt("warning-30"),"warning-40":bt("warning-40"),"warning-50":bt("warning-50"),"warning-60":bt("warning-60"),"warning-70":bt("warning-70"),"warning-80":bt("warning-80"),"warning-90":bt("warning-90"),"warning-95":bt("warning-95"),"warning-100":bt("warning-100"),"error-10":bt("error-10"),"error-20":bt("error-20"),"error-30":bt("error-30"),"error-40":bt("error-40"),"error-50":bt("error-50"),"error-60":bt("error-60"),"error-70":bt("error-70"),"error-80":bt("error-80"),"error-90":bt("error-90"),"error-95":bt("error-95"),"error-100":bt("error-100"),"info-10":bt("info-10"),"info-20":bt("info-20"),"info-30":bt("info-30"),"info-40":bt("info-40"),"info-50":bt("info-50"),"info-60":bt("info-60"),"info-70":bt("info-70"),"info-80":bt("info-80"),"info-90":bt("info-90"),"info-95":bt("info-95"),"info-100":bt("info-100"),white:bt("white"),black:bt("black")},yt={text:bt("neutral-20"),"text-subtle":bt("neutral-30"),"text-subtler":bt("neutral-50"),"text-subtlest":bt("neutral-60"),"text-primary":bt("primary-50"),"text-hover":bt("primary-40"),"text-selected":bt("primary-50"),"text-selected-hover":bt("primary-40"),"text-disabled":bt("neutral-50"),"text-disabled-subtle":bt("neutral-60"),"text-disabled-subtlest":bt("neutral-80"),"text-selected-disabled":bt("neutral-50"),"text-success":bt("success-40"),"text-warning":bt("warning-40"),"text-error":bt("error-40"),"text-info":bt("info-40"),"text-inverse":bt("white"),icon:bt("neutral-50"),"icon-subtle":bt("neutral-60"),"icon-strongest":bt("neutral-20"),"icon-primary":bt("primary-50"),"icon-primary-subtle":bt("primary-60"),"icon-primary-subtlest":bt("primary-70"),"icon-hover":bt("primary-40"),"icon-selected":bt("primary-50"),"icon-selected-hover":bt("primary-40"),"icon-disabled":bt("neutral-50"),"icon-disabled-subtle":bt("neutral-60"),"icon-selected-disabled":bt("neutral-60"),"icon-success":bt("success-50"),"icon-warning":bt("warning-60"),"icon-error":bt("error-50"),"icon-error-strong":bt("error-40"),"icon-info":bt("info-50"),"icon-inverse":bt("white"),"icon-primary-inverse":"#FEAB10",border:bt("neutral-90"),"border-strong":bt("neutral-70"),"border-stronger":bt("neutral-30"),"border-primary":bt("primary-50"),"border-primary-subtle":bt("primary-60"),"border-hover":bt("primary-90"),"border-hover-strong":bt("primary-60"),"border-selected":bt("primary-50"),"border-selected-subtle":bt("primary-70"),"border-selected-subtlest":bt("primary-90"),"border-selected-hover":bt("primary-40"),"border-focus":bt("primary-60"),"border-focus-strong":bt("primary-50"),"border-disabled":bt("neutral-90"),"border-selected-disabled":bt("neutral-70"),"border-success":bt("success-60"),"border-warning":bt("warning-60"),"border-error":bt("error-60"),"border-error-focus":bt("error-60"),"border-error-strong":bt("error-40"),"border-info":bt("info-60"),bg:bt("white"),"bg-strong":bt("neutral-100"),"bg-stronger":bt("neutral-95"),"bg-strongest":bt("neutral-90"),"bg-hover":bt("primary-95"),"bg-hover-strong":bt("primary-90"),"bg-hover-subtle":bt("primary-100"),"bg-hover-neutral":bt("neutral-95"),"bg-selected":bt("primary-95"),"bg-selected-hover":bt("primary-90"),"bg-selected-strong":bt("primary-90"),"bg-selected-strongest":bt("primary-90"),"bg-disabled":bt("neutral-95"),"bg-selected-disabled":bt("neutral-95"),"bg-success":bt("success-100"),"bg-success-strong":bt("success-50"),"bg-warning":bt("warning-100"),"bg-warning-strong":bt("warning-50"),"bg-info":bt("info-100"),"bg-info-strong":bt("info-50"),"bg-error":bt("error-100"),"bg-error-strong":bt("error-50"),"bg-error-strong-hover":bt("error-30"),"bg-inverse":bt("neutral-20"),"bg-inverse-subtle":bt("neutral-30"),"bg-inverse-subtler":bt("neutral-50"),"bg-inverse-subtlest":bt("neutral-60"),"bg-primary":bt("primary-50"),"bg-primary-subtle":bt("primary-60"),"bg-primary-subtler":bt("primary-80"),"bg-primary-subtlest":bt("primary-100"),"bg-primary-hover":bt("primary-40"),"bg-primary-subtlest-hover":bt("primary-90"),"bg-primary-subtlest-selected":bt("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:bt("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":bt("black"),"focus-ring-inverse":bt("white")},pt={collections:{lifesg:yt,bookingsg:yt,rbs:yt,mylegacy:yt,ccube:yt},defaultValue:"lifesg"},Ft=e=>r=>{const t=r.theme,n=gt(pt,t.colourScheme),a=t.overrides&&t.overrides.semanticColour?ht(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},Dt={text:Ft("text"),"text-subtle":Ft("text-subtle"),"text-subtler":Ft("text-subtler"),"text-subtlest":Ft("text-subtlest"),"text-primary":Ft("text-primary"),"text-hover":Ft("text-hover"),"text-selected":Ft("text-selected"),"text-selected-hover":Ft("text-selected-hover"),"text-disabled":Ft("text-disabled"),"text-disabled-subtle":Ft("text-disabled-subtle"),"text-disabled-subtlest":Ft("text-disabled-subtlest"),"text-selected-disabled":Ft("text-selected-disabled"),"text-success":Ft("text-success"),"text-warning":Ft("text-warning"),"text-error":Ft("text-error"),"text-info":Ft("text-info"),"text-inverse":Ft("text-inverse"),icon:Ft("icon"),"icon-subtle":Ft("icon-subtle"),"icon-strongest":Ft("icon-strongest"),"icon-primary":Ft("icon-primary"),"icon-primary-subtle":Ft("icon-primary-subtle"),"icon-primary-subtlest":Ft("icon-primary-subtlest"),"icon-hover":Ft("icon-hover"),"icon-selected":Ft("icon-selected"),"icon-selected-hover":Ft("icon-selected-hover"),"icon-disabled":Ft("icon-disabled"),"icon-disabled-subtle":Ft("icon-disabled-subtle"),"icon-selected-disabled":Ft("icon-selected-disabled"),"icon-success":Ft("icon-success"),"icon-warning":Ft("icon-warning"),"icon-error":Ft("icon-error"),"icon-error-strong":Ft("icon-error-strong"),"icon-info":Ft("icon-info"),"icon-inverse":Ft("icon-inverse"),"icon-primary-inverse":Ft("icon-primary-inverse"),border:Ft("border"),"border-strong":Ft("border-strong"),"border-stronger":Ft("border-stronger"),"border-primary":Ft("border-primary"),"border-primary-subtle":Ft("border-primary-subtle"),"border-hover":Ft("border-hover"),"border-hover-strong":Ft("border-hover-strong"),"border-selected":Ft("border-selected"),"border-selected-subtle":Ft("border-selected-subtle"),"border-selected-subtlest":Ft("border-selected-subtlest"),"border-selected-hover":Ft("border-selected-hover"),"border-focus":Ft("border-focus"),"border-focus-strong":Ft("border-focus-strong"),"border-disabled":Ft("border-disabled"),"border-selected-disabled":Ft("border-selected-disabled"),"border-success":Ft("border-success"),"border-warning":Ft("border-warning"),"border-error":Ft("border-error"),"border-error-focus":Ft("border-error-focus"),"border-error-strong":Ft("border-error-strong"),"border-info":Ft("border-info"),bg:Ft("bg"),"bg-strong":Ft("bg-strong"),"bg-stronger":Ft("bg-stronger"),"bg-strongest":Ft("bg-strongest"),"bg-hover":Ft("bg-hover"),"bg-hover-strong":Ft("bg-hover-strong"),"bg-hover-subtle":Ft("bg-hover-subtle"),"bg-hover-neutral":Ft("bg-hover-neutral"),"bg-selected":Ft("bg-selected"),"bg-selected-hover":Ft("bg-selected-hover"),"bg-selected-strong":Ft("bg-selected-strong"),"bg-selected-strongest":Ft("bg-selected-strongest"),"bg-disabled":Ft("bg-disabled"),"bg-selected-disabled":Ft("bg-selected-disabled"),"bg-success":Ft("bg-success"),"bg-success-strong":Ft("bg-success-strong"),"bg-warning":Ft("bg-warning"),"bg-warning-strong":Ft("bg-warning-strong"),"bg-info":Ft("bg-info"),"bg-info-strong":Ft("bg-info-strong"),"bg-error":Ft("bg-error"),"bg-error-strong":Ft("bg-error-strong"),"bg-error-strong-hover":Ft("bg-error-strong-hover"),"bg-inverse":Ft("bg-inverse"),"bg-inverse-subtle":Ft("bg-inverse-subtle"),"bg-inverse-subtler":Ft("bg-inverse-subtler"),"bg-inverse-subtlest":Ft("bg-inverse-subtlest"),"bg-primary":Ft("bg-primary"),"bg-primary-subtle":Ft("bg-primary-subtle"),"bg-primary-subtler":Ft("bg-primary-subtler"),"bg-primary-subtlest":Ft("bg-primary-subtlest"),"bg-primary-hover":Ft("bg-primary-hover"),"bg-primary-subtlest-hover":Ft("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ft("bg-primary-subtlest-selected"),"bg-available":Ft("bg-available"),"overlay-strong":Ft("overlay-strong"),"overlay-subtle":Ft("overlay-subtle"),hyperlink:Ft("hyperlink"),"hyperlink-inverse":Ft("hyperlink-inverse"),"focus-ring":Ft("focus-ring"),"focus-ring-inverse":Ft("focus-ring-inverse")},xt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},vt=e=>r=>{var t;const n=r.theme,a=gt(xt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ht(a,e,n.overrides.breakpoint):a[e],i},St={"xxs-min":vt("xxs-min"),"xxs-max":vt("xxs-max"),"xs-min":vt("xs-min"),"xs-max":vt("xs-max"),"sm-min":vt("sm-min"),"sm-max":vt("sm-max"),"md-min":vt("md-min"),"md-max":vt("md-max"),"lg-min":vt("lg-min"),"lg-max":vt("lg-max"),"xl-min":vt("xl-min"),"xl-max":vt("xl-max"),"xxl-min":vt("xxl-min"),"xxs-column":vt("xxs-column"),"xs-column":vt("xs-column"),"sm-column":vt("sm-column"),"md-column":vt("md-column"),"lg-column":vt("lg-column"),"xl-column":vt("xl-column"),"xxl-column":vt("xxl-column"),"xxs-gutter":vt("xxs-gutter"),"xs-gutter":vt("xs-gutter"),"sm-gutter":vt("sm-gutter"),"md-gutter":vt("md-gutter"),"lg-gutter":vt("lg-gutter"),"xl-gutter":vt("xl-gutter"),"xxl-gutter":vt("xxl-gutter"),"xxs-margin":vt("xxs-margin"),"xs-margin":vt("xs-margin"),"sm-margin":vt("sm-margin"),"md-margin":vt("md-margin"),"lg-margin":vt("lg-margin"),"xl-margin":vt("xl-margin"),"xxl-margin":vt("xxl-margin")},wt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=St["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),$t={MaxWidth:wt("max-width"),MinWidth:wt("min-width")},Bt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Et={collections:{lifesg:Bt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Bt,mylegacy:Bt,ccube:Bt},defaultValue:"lifesg"},Ct=e=>r=>{const t=r.theme,n=gt(Et,t.fontScheme);return t.overrides&&t.overrides.fontSpec?ht(n,e,t.overrides.fontSpec):n[e]},At=(e,r,t,n)=>u`
    font-family: ${Ct("font-family")};
    font-size: ${Ct(e)};
    font-weight: ${Ct(r)};
    line-height: ${Ct(t)};
    letter-spacing: ${Ct(n)};
`,Ht={"header-xxl-light":At("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":At("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":At("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":At("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":At("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":At("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":At("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":At("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":At("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":At("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":At("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":At("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":At("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":At("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":At("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":At("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":At("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":At("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":At("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":At("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":At("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":At("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":At("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":At("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":At("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":At("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":At("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":At("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":At("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":At("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":At("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":At("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":At("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":At("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":At("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":At("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":At("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":At("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":At("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":At("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":At("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":At("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},kt={collections:{lifesg:Ht,bookingsg:Ht,rbs:Ht,mylegacy:Ht,ccube:Ht},defaultValue:"lifesg"},Ot=e=>r=>{const t=r.theme,n=gt(kt,t.fontScheme),a=t.overrides&&t.overrides.font?ht(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},zt={"header-xxl-light":Ot("header-xxl-light"),"header-xxl-regular":Ot("header-xxl-regular"),"header-xxl-semibold":Ot("header-xxl-semibold"),"header-xxl-bold":Ot("header-xxl-bold"),"header-xl-light":Ot("header-xl-light"),"header-xl-regular":Ot("header-xl-regular"),"header-xl-semibold":Ot("header-xl-semibold"),"header-xl-bold":Ot("header-xl-bold"),"header-lg-light":Ot("header-lg-light"),"header-lg-regular":Ot("header-lg-regular"),"header-lg-semibold":Ot("header-lg-semibold"),"header-lg-bold":Ot("header-lg-bold"),"header-md-light":Ot("header-md-light"),"header-md-regular":Ot("header-md-regular"),"header-md-semibold":Ot("header-md-semibold"),"header-md-bold":Ot("header-md-bold"),"header-sm-light":Ot("header-sm-light"),"header-sm-regular":Ot("header-sm-regular"),"header-sm-semibold":Ot("header-sm-semibold"),"header-sm-bold":Ot("header-sm-bold"),"header-xs-light":Ot("header-xs-light"),"header-xs-regular":Ot("header-xs-regular"),"header-xs-semibold":Ot("header-xs-semibold"),"header-xs-bold":Ot("header-xs-bold"),"body-baseline-light":Ot("body-baseline-light"),"body-baseline-regular":Ot("body-baseline-regular"),"body-baseline-semibold":Ot("body-baseline-semibold"),"body-baseline-bold":Ot("body-baseline-bold"),"body-md-light":Ot("body-md-light"),"body-md-regular":Ot("body-md-regular"),"body-md-semibold":Ot("body-md-semibold"),"body-md-bold":Ot("body-md-bold"),"body-sm-light":Ot("body-sm-light"),"body-sm-regular":Ot("body-sm-regular"),"body-sm-semibold":Ot("body-sm-semibold"),"body-sm-bold":Ot("body-sm-bold"),"body-xs-light":Ot("body-xs-light"),"body-xs-regular":Ot("body-xs-regular"),"body-xs-semibold":Ot("body-xs-semibold"),"body-xs-bold":Ot("body-xs-bold"),"formlabel-baseline-semibold":Ot("formlabel-baseline-semibold"),"formlabel-lg-semibold":Ot("formlabel-lg-semibold")},Mt=Object.assign(Object.assign({},Dt),{Primitive:ft}),Lt=zt,Yt=$t,Tt=d.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return u`
                    background-color: ${Mt.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?Mt["border-error-strong"]:Mt["border-primary"]};

                    color: ${e.$buttonIsDanger?Mt["text-error"]:Mt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Mt["bg-hover-neutral"]};
                    }
                `;case"light":return u`
                    background-color: ${Mt.bg};
                    border: 1px solid ${Mt.border};

                    color: ${e.$buttonIsDanger?Mt["text-error"]:Mt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Mt["bg-hover-neutral"]};
                    }
                `;case"link":return u`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?Mt["text-error"]:Mt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Mt["bg-hover-neutral"]};
                    }
                `;case"disabled":return u`
                    background-color: ${Mt["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Mt["text-disabled"]};
                `;default:return u`
                    background-color: ${e.$buttonIsDanger?Mt["bg-error-strong"]:Mt["bg-primary"]};
                    border: 1px solid transparent;

                    ${Yt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Mt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Mt["bg-error-strong-hover"]:Mt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return u`
                    height: 2.5rem;
                    ${Lt["body-md-semibold"]}

                    ${Yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return u`
                    height: 4rem;
                    ${Lt["header-md-semibold"]}

                    ${Yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return u`
                    height: 3rem;
                    ${Lt["header-xs-semibold"]}

                    ${Yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Wt=d((({color:t,className:n,size:a})=>e(ot,Object.assign({className:n,$size:a,$color:t},{children:[r(lt,{id:"inner1"}),r(dt,{id:"inner2"}),r(ct,{id:"inner3"}),r(ut,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,jt={Default:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Tt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Wt,{}),r("span",{children:a})]}))})),Small:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Tt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Wt,{}),r("span",{children:a})]}))})),Large:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Tt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Wt,{}),r("span",{children:a})]}))}))},Rt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},_t={D1:{fontFamily:Rt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Rt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Rt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Rt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Rt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Rt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Rt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Rt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Rt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Rt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Rt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Rt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Rt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Rt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Nt={D1:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Rt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Rt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Rt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Rt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Rt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},It={collections:{base:_t,oneservice:{D1:{fontFamily:Rt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Rt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Rt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Rt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Rt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Rt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Rt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Rt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Rt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Rt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Rt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Rt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Rt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Rt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Nt},defaultValue:"base"},Pt=e=>r=>{const t=r.theme,n=Cr(It,t[Ar.textStyleScheme]);return t.options&&t.options.textStyle?Er(n,e,t.options.textStyle):Er(n,e)},Vt={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Jt=[Rt.OpenSans,Rt.PlusJakartaSans],Zt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Xt=(e,r)=>t=>{var n;const a=Vt[e].fontFamily(t),i=Vt[e].fontWeight(t),o=Jt.find((e=>Object.values(e).includes(a)));return o?u`
                font-family: ${Zt(o,r)||Zt(o,i)||a};
                font-weight: normal !important;
            `:u`
            font-family: ${a};
            font-weight: ${null!==(n=Ut(r)||i)&&void 0!==n?n:"normal"};
        `},Ut=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Gt=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},qt=(e,r,t=!1)=>n=>{const a=Vt[e],i=a.fontSize(n);return u`
            ${Xt(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${u`
                margin-bottom: ${i*(t?1.05:0)}rem;
            `}
        `},Qt=(e=!1,r=!1,t=void 0)=>r?u`
            display: block;
            ${Gt(t)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${Gt(t)}
        `;var Kt;!function(e){e.D1=d.h1`
        ${e=>u`
                ${qt("D1",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=d.h1`
        ${e=>u`
                ${qt("D2",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=d.h1`
        ${e=>u`
                ${qt("D3",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=d.h1`
        ${e=>u`
                ${qt("D4",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=d.h1`
        ${e=>u`
                ${qt("DBody",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=d.h1`
        ${e=>u`
                ${qt("H1",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=d.h2`
        ${e=>u`
                ${qt("H2",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=d.h3`
        ${e=>u`
                ${qt("H3",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=d.h4`
        ${e=>u`
                ${qt("H4",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=d.h5`
        ${e=>u`
                ${qt("H5",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=d.h6`
        ${e=>u`
                ${qt("H6",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=d.p`
        ${e=>u`
                ${qt("Body",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=d.p`
        ${e=>u`
                ${qt("BodySmall",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=d.span`
        ${e=>u`
                ${qt("XSmall",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>tn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>tn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Kt||(Kt={}));const en=d.a`
    ${e=>u`
            ${qt(e.textStyle,e.weight)}
            color: ${Or.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Or.Secondary};

                svg {
                    color: ${Or.Secondary};
                }
            }
        `}
`,rn=d(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,tn=t=>{var{external:n=!1,children:a}=t,i=f(t,["external","children"]);return e(en,Object.assign({},i,{children:[a,n&&r(rn,{})]}))};var nn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nn||(nn={}));const an=d.button`
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

        ${({$highlight:e})=>e&&u`
                background-color: ${Or.Neutral[7]};
            `}
    }
`,on=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return r(an,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),sn=u`
    color: ${Or.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,ln=d(g)`
    ${sn}
`,dn=d(m)`
    ${sn}
`,cn=d(h)`
    ${sn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,un=d.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hn=d.div`
    display: flex;
    flex: 1;
    position: relative;
`,gn=d.div`
    isolation: isolate;
    width: 100%;
`,mn=d.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Or.Neutral[8]};

    ${e=>{if(!e.$visible)return u`
                display: none;
            `}}
`,bn=d.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,fn=d.div`
    display: flex;
`,yn=d.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?u`
                display: none;
            `:e.$expanded?u`
                ${cn} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,pn=d.p`
    ${qt("H5","regular")}
`,Fn=d.div`
    display: flex;
`,Dn=d(on)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,xn=d.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,vn=d(jt.Small)`
    flex: 1;
`,Sn=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return u`
                    gap: 0.5rem 2.5rem;
                `;case"input":return u`
                    gap: 0.5rem 1rem;
                `}}}
`,wn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return u`
                    background-color: ${Or.Accent.Light[6](e)};
                `;case"selected-month":return u`
                    background-color: ${Or.Accent.Light[5](e)};
                    border: 1px solid ${Or.Primary(e)};
                `}}}
`,$n=d(Kt.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Or.Neutral[4]};
            `;switch(e.$variant){case"current-month":return u`
                    color: ${Or.Neutral[3](e)};
                `;case"selected-month":return u`
                    ${qt("H5","semibold")}
                    color: ${Or.Primary(e)};
                `}}}
`,Bn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:h})=>{const g=a((()=>Xr.generateMonths(Wr(e))),[e]),m=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&l,a="end"===t&&n&&e.isBefore(n,"month")&&l;return r||a},b=e=>{const r=e.format("MMMM"),t=(n=e,!Xr.isWithinRange(n,d?Wr(d):void 0,c?Wr(c):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":Wr().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||m(e),interactive:!t||u,month:r,variant:a}};return g.length?r(Sn,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=b(e);return r(wn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||h(e)})(e,!n)},{children:r($n,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t},{children:i}))}),i)}))})):null},En=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return u`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return u`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Cn=d.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return u`
                    background: ${Or.Accent.Light[6](e)};
                `;case"selected-year":return u`
                    background: ${Or.Accent.Light[5](e)};
                    border: 1px solid ${Or.Primary(e)};
                `}}};
`,An=d(Kt.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Or.Neutral[4]};
            `;switch(e.$variant){case"current-year":return u`
                    color: ${Or.Neutral[3](e)};
                `;case"selected-year":return u`
                    ${qt("H5","semibold")}
                    color: ${Or.Primary(e)};
                `;case"other-decade":return u`
                    color: ${Or.Neutral[4](e)};
                `}}}
`,Hn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:h})=>{const g=a((()=>Xr.generateDecadeOfYears(Wr(e))),[e]),m=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&l,a="end"===t&&n&&e.isBefore(n,"year")&&l;return r||a},b=e=>{const r=[0,11].includes(g.indexOf(e)),t=e.year(),n=(a=e,!Xr.isWithinRange(a,d?Wr(d):void 0,c?Wr(c):void 0,"year"));var a;const i=r?"other-decade":o.isSame(e,"year")?"selected-year":Wr().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||m(e),interactive:!n||u,year:t,variant:i}};return g.length?r(En,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=b(e);return r(Cn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||h(e)})(e,!n)},{children:r(An,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t,$interactive:n},{children:i}))}),i)}))})):null},kn=n.forwardRef(((n,a)=>{var{children:d,initialCalendarDate:c,type:u,minDate:h,maxDate:g,currentFocus:m,selectedStartDate:b,selectedEndDate:y,selectWithinRange:p,dynamicHeight:F=!1,allowDisabledSelection:D,onCalendarDateChange:x,withButton:v,doneButtonDisabled:S,onDismiss:w,showNavigationHeader:$=!0,getLeftArrowDate:B,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:A,getMonthHeaderLabel:H,getYearHeaderLabel:k}=n,O=f(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[z,M]=i(tt.toDayjs(c)),[L,Y]=i(tt.toDayjs(c)),[T,W]=i("default"),j=o(null),R=o(null),_=o();s(a,(()=>({defaultView(){W("default")},resetView(){const e=tt.toDayjs(c);M(e),Y(e),W("default")},setCalendarDate(e){const r=tt.toDayjs(e);M(r),Y(r)}}))),l((()=>{const e=tt.toDayjs(c);M(e),Y(e)}),[c]),l((()=>{X(L)}),[L]);const N=()=>{"month-options"!==T?(W("month-options"),_.current.focus()):(W("default"),M(L))},I=()=>{"default"!==T?(W("default"),M(L)):W("year-options")},P=()=>{_.current.focus();const e=B?B(z):z.subtract(1,"month");switch(T){case"default":Y(e),M(e);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},V=()=>{_.current.focus();const e=E?E(z):z.add(1,"month");switch(T){case"default":Y(e),M(e);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},J=e=>{M(e),Y(e),v||W("default")},Z=()=>{const e=tt.toDayjs(c);M(e),Y(e),"default"===T?U("reset"):W("default")},X=e=>{x&&x(e)},U=e=>{w&&w(e)},G=()=>{if(!h||D)return!1;const e=Wr(h);return"month-options"===T?!Xr.isPreviousYearWithinRange(z,e):"year-options"===T?!Xr.isPreviousDecadeWithinRange(z,e):C?C(z):!Xr.isPreviousMonthWithinRange(z,e)},q=()=>{if(!g||D)return!1;const e=Wr(g);return"month-options"===T?!Xr.isNextYearWithinRange(z,e):"year-options"===T?!Xr.isNextDecadeWithinRange(z,e):A?A(z):!Xr.isNextMonthWithinRange(z,e)},Q=()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=Xr.getStartEndDecade(z);return`${e} to ${r}`}return k?k(z):z.format("YYYY")},K=()=>{const n=H?H(z):z.format("MMM");return e(t,{children:[e(yn,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:N},{children:[r(pn,{children:n}),r(cn,{})]})),e(yn,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:I},{children:[r(pn,{children:Q()}),r(cn,{})]}))]})},ee=()=>{switch(T){case"month-options":return r(Bn,{type:u,calendarDate:z,currentFocus:m,minDate:h,maxDate:g,selectedStartDate:b,selectedEndDate:y,viewCalendarDate:L,isNewSelection:p,onMonthSelect:J,allowDisabledSelection:D});case"year-options":return r(Hn,{type:u,calendarDate:z,currentFocus:m,minDate:h,maxDate:g,selectedStartDate:b,selectedEndDate:y,viewCalendarDate:L,isNewSelection:p,onYearSelect:J,allowDisabledSelection:D});default:return null}};return e(un,Object.assign({ref:_,"data-id":"calendar-container","data-testid":"calendar-container"},O,{children:[$&&e(bn,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(fn,{children:K()}),e(Fn,{children:[r(Dn,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:r(ln,{})})),r(Dn,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:r(dn,{})}))]})]})),r(hn,{children:(()=>{const n="function"==typeof d?d({calendarDate:L,currentView:T}):d;return e(t,F?{children:["default"===T&&n,ee()]}:{children:[r(gn,{children:n}),r(mn,Object.assign({$visible:"default"!==T},{children:ee()}))]})})()}),(()=>{if(!v)return;const t=!!("default"===T)&&S;return e(xn,{children:[r(vn,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),r(vn,Object.assign({"data-testid":"done-button",ref:j,type:"button",onClick:()=>{t||(M(L),"default"===T?U("confirmed"):W("default"))},disabled:t},{children:"Done"}))]})})()]}))})),On=d.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,zn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Mn=d.div`
    grid-column: 1 / -1;
    display: flex;
`;d.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Ln=d.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return u`
                    left: 0;
                `;case"right":return u`
                    right: 0;
                `}}}
`,Yn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;d(Kt.H5)`
    ${e=>{const{$disabledDisplay:r,$selected:t,$variant:n}=e;if(r&&t)return u`
                ${qt("H5","semibold")};
                color: ${Or.Accent.Light[2]};
            `;if(r)return u`
                color: ${Or.Neutral[4]};
            `;if(t)return u`
                ${qt("H5","semibold")};
                color: ${Or.Primary};
            `;switch(n){case"other-month":return u`
                    color: ${Or.Neutral[4]};
                `;case"today":return u`
                    color: ${Or.Neutral[3]};
                `;case"default":return u`
                    color: ${Or.Neutral[1]};
                `}}}
`,d(Ln)`
    ${e=>{const{$selected:r}=e;if(r)return u`
                border-top: 1px solid ${Or.Accent.Light[4]};
                border-bottom: 1px solid ${Or.Accent.Light[4]};
                background-color: ${Or.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:r,$overlap:t}=e;return r?u`
                border-top: 1px dashed ${Or.Accent.Light[4]};
                border-bottom: 1px dashed ${Or.Accent.Light[4]};
                background-color: ${Or.Accent.Light[6]};
            `:t?u`
                background-color: ${Or.Accent.Light[4]};
            `:void 0}}
`,d(Yn)`
    ${e=>{const{$hovered:r,$selected:t}=e;return t?u`
                background: ${Or.Accent.Light[5]};
                border: 1px solid ${Or.Primary};
            `:r?u`
                box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                border: 1px solid ${Or.Accent.Light[1]};
                background-color: ${Or.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:r,$disabledDisplay:t}=e;return r?u`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                    background-color: ${Or.Neutral[8]};
                }
            `:t?u`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:r,$overlap:t,$variant:n}=e;return t?u`
                border: 1px solid ${Or.Accent.Light[1]};
                background: ${Or.Accent.Light[4]};

                :hover {
                    background: ${Or.Accent.Light[4]};
                }
            `:r?u`
                color: ${Or.Neutral[4]};
            `:"today"===n?u`
                    background: ${Or.Accent.Light[5]};
                `:void 0}}
`;const Tn=e=>{let r=Or.Neutral[8],t="1px solid transparent";switch(e.$type){case"current":r=Or.Accent.Light[5];break;case"hover-dash":r=Or.Accent.Light[6],t=`1px dashed ${Or.Accent.Light[4](e)}`;break;case"hover-current":r=Or.Neutral[8],t=`1px solid ${Or.Primary(e)}`;break;case"selected":r=Or.Accent.Light[5],t=`1px solid ${Or.Accent.Light[4](e)}`;break;case"selected-outline":r=Or.Accent.Light[5],t=`1px solid ${Or.Primary(e)}`;break;case"overlap":r=Or.Accent.Light[4],t=`1px solid ${Or.Accent.Light[4](e)}`;break;case"overlap-outline":r=Or.Accent.Light[4],t=`1px solid ${Or.Primary(e)}`}return{color:r,border:t}},Wn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,jn=d.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:r,border:t}=Tn(e);return u`
            background-color: ${r};
            background-clip: content-box;
            border-top: ${t};
            border-bottom: ${t};
        `}}
`,Rn=d(jn)`
    left: 0;
`,_n=d(jn)`
    right: 0;
`,Nn=d.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Or.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,In=d(Nn)`
    left: 0;
`,Pn=d(Nn)`
    right: 0;
`,Vn=d.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:r,border:t}=Tn(e);return u`
                background-color: ${r};
                background-clip: content-box;
                border: ${t};
            `}}}

    ${e=>e.$shadow&&u`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Jn=d(Vn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Or.Shadow.Accent};
    }
`,Zn=d(Vn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Or.Shadow.Accent};
    }
`,Xn=d(Kt.H5)`
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

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"selected"===t?u`
                    ${qt("H5","semibold")};
                    color: ${Or.Accent.Light[2]};
                `:u`
                color: ${Or.Neutral[4]};
            `;switch(t){case"selected":return u`
                    ${qt("H5","semibold")};
                    color: ${Or.Primary};
                `;case"current":return u`
                    color: ${Or.Neutral[3]};
                `;case"unavailable":return u`
                    color: ${Or.Neutral[4]};
                `;case"hidden":return u`
                    visibility: hidden;
                `;default:return u`
                    color: ${Or.Neutral[1]};
                `}}}
`,Un=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:l,disabled:d,interactive:c,date:u,onSelect:h,onHover:g,onHoverEnd:m})=>e(Wn,{children:[r(In,{$shadow:t&&o}),r(Rn,{$type:t,$shadow:t&&o}),r(Jn,{$type:a,$shadow:a&&s}),r(Pn,{$shadow:n&&o}),r(_n,{$type:n,$shadow:n&&o}),r(Zn,{$type:i,$shadow:i&&s}),r(Xn,Object.assign({weight:"regular",$type:l,$disabled:d,$interactive:c,onClick:()=>{h(u)},onMouseEnter:()=>{g(u)},onMouseLeave:()=>{m&&m(u)}},{children:u.date()}))]}),Gn=({date:e,calendarDate:t,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:m})=>{const b=Xr.isDisabledDay(e,d,s,l),f=!b||c,y=()=>{const e=Wr(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:t,disabled:b,interactive:f,onSelect:()=>{g(e,!f)},onHover:()=>{m(e.format("YYYY-MM-DD"),!f)}};return r(Un,Object.assign({},p,(()=>{const r={};if(t.month()!==e.month())r.labelType=h?"hidden":"unavailable";else if(Wr().isSame(e,"day")&&!b)r.labelType="current",r.circleLeft="current",r.circleRight="current";else if(u){const t="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(t||o)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&i||a&&o)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(r.labelType="selected",i||(r.bgLeft="selected"),o||(r.bgRight="selected")),r)})(),(()=>{if(!o)return;const r={};e.isSame(o,"day")&&(r.circleShadow=!0,r.circleLeft="hover-current",r.circleRight="hover-current");const{hoverStart:t,hoverEnd:n,overlapStart:a,overlapEnd:i}=y();if(t&&n){if(e.isBetween(t,n,"day","[]")){const a=e.isSame(t,"day"),i=e.isSame(n,"day");r.labelType="selected",a||(r.bgLeft="hover-dash"),i||(r.bgRight="hover-dash")}return r}if(a&&i){if(e.isBetween(a,i,"day","[]")){const t=e.isSame(a,"day"),n=e.isSame(i,"day");r.labelType="selected",(t||n)&&(r.circleShadow=!0,r.circleLeft="overlap-outline",r.circleRight="overlap-outline"),t||(r.bgLeft="overlap"),n||(r.bgRight="overlap")}return r}return r})()))};Wr.extend(Nr);const qn=({calendarDate:t,currentFocus:n,disabledDates:o,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:h,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:b})=>{const f=a((()=>Xr.generateDays(t)),[t]),[y,p]=i(""),F=(e,r)=>{r&&!m||d(e)},D=(e,r)=>{r&&!m||(p(e),c(e))},x=()=>{p(""),c("")};return e(On,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,t)=>r(zn,{children:r(Kt.H6,Object.assign({weight:"semibold"},{children:Wr(e).format("ddd")}))},`week-day-${t}`))),f.map(((e,a)=>r(Mn,Object.assign({onMouseLeave:x},{children:e.map(((e,a)=>r(Gn,{date:e,calendarDate:t,startDate:s,endDate:l,hoverDate:y,currentFocus:n,minDate:h,maxDate:g,disabledDates:o,allowDisabledSelection:m,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:F,onHover:D},`day-${a}`)))}),a)))]}))},Qn=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=Xr.isDisabledDay(e,s,i,o),g=!h||l,{start:m,end:b}=n?Xr.getFixedRangeStartEnd(tt.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?Xr.getFixedRangeStartEnd(tt.toDayjs(a),d):{start:void 0,end:void 0},p=n&&e.isBetween(m,b,"day","[]"),F=a&&e.isBetween(f,y,"day","[]"),D=p&&e.isSame(m,"day")||F&&e.isSame(f,"day"),x=p&&e.isSame(b,"day")||F&&e.isSame(y,"day"),v=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},S={date:e,calendarDate:t,disabled:h,interactive:g,onSelect:()=>{c(e,!g)},onHover:()=>{u(e.format("YYYY-MM-DD"),!g)}};return r(Un,Object.assign({},S,(()=>{const r={};return p||F?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Wr().isSame(e,"day")&&!h&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return F&&v(r,"hover-dash",t===f,t===y),p&&v(r,"selected",t===m,t===b),p&&F&&v(r,"overlap",D,x),t===m&&(F?(r.circleLeft="overlap-outline",r.circleRight="overlap-outline"):(r.circleRight="selected-outline",r.circleLeft="selected-outline")),t===f&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0,f>=m&&f<b&&(r.circleLeft="overlap-outline",r.circleRight="overlap-outline")),r})()))},Kn=({calendarDate:t,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:h})=>{const g=a((()=>Xr.generateDays(t)),[t]),[m,b]=i(""),f=(e,r)=>{r&&!u||(s(e),e&&!Wr(e).isSame(e,"month")&&b(""))},y=(e,r)=>{r&&!u||(b(e),l(e))},p=()=>{b(""),l("")};return e(On,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,t)=>r(zn,{children:r(Kt.H6,Object.assign({weight:"semibold"},{children:Wr(e).format("ddd")}))},`week-day-${t}`))),g.map(((e,a)=>r(Mn,Object.assign({onMouseLeave:p},{children:e.map(((e,a)=>r(Qn,{date:e,calendarDate:t,selectedDate:o,hoverDate:m,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:f,onHover:y,numberOfDays:h},`day-${a}`)))}),a)))]}))},ea=d.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Or.Neutral[8]};

    ${e=>{if("input"===e.$type)return u`
                border: 1px solid ${Or.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,ra=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Xr.isDisabledDay(e,s,i,o),h=!u||l,{start:g,end:m}=Xr.getWeekStartEnd(tt.toDayjs(n)),{start:b,end:f}=Xr.getWeekStartEnd(tt.toDayjs(a)),y=n&&e.isBetween(g,m,"day","[]"),p=a&&e.isBetween(b,f,"day","[]"),F=y&&e.isSame(g)||p&&e.isSame(b),D=y&&e.isSame(m)||p&&e.isSame(f),x={date:e,calendarDate:t,disabled:u,interactive:h,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return r(Un,Object.assign({},x,(()=>{const r={};return y||p?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Wr().isSame(e,"day")&&!u&&(r.labelType="current",r.circleLeft="current",r.circleRight="current"),r})(),(()=>{const e={};let r;return y&&p?(r="hover-current",e.shadow=!0,e.circleShadow=F||D):y?r="selected-outline":p&&(r="hover-dash"),r&&(F?e.circleLeft=r:e.bgLeft=r,D?e.circleRight=r:e.bgRight=r),e})()))},ta=({calendarDate:t,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u})=>{const h=a((()=>Xr.generateDays(t)),[t]),[g,m]=i(""),b=(e,r)=>{if(r&&!u)return;const t=e.startOf("week");s(t),e&&!Wr(e).isSame(t,"month")&&m("")},f=(e,r)=>{r&&!u||(m(e),l(e))},y=()=>{m(""),l("")};return e(On,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,t)=>r(zn,{children:r(Kt.H6,Object.assign({weight:"semibold"},{children:Wr(e).format("ddd")}))},`week-day-${t}`))),h.map(((e,a)=>r(Mn,Object.assign({onMouseLeave:y},{children:e.map(((e,a)=>r(ra,{date:e,calendarDate:t,selectedDate:o,hoverDate:g,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:b,onHover:f},`day-${a}`)))}),a)))]}))},na=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:i,value:l,endValue:d,currentFocus:c,withButton:u,variant:h,minDate:g,maxDate:m,allowDisabledSelection:b,type:f="standalone",selectWithinRange:y=!0,initialCalendarDate:p,numberOfDays:F,showActiveMonthDaysOnly:D=!1},x)=>{const v=o(),S=o(void 0);s(x,(()=>({reset(){v.current.resetView()},setCalendarDate(e){v.current.setCalendarDate(e)}})));const w=e=>{const r=e.format("YYYY-MM-DD");v.current.setCalendarDate(r),B(r)},$=e=>{E(e)},B=e=>{n&&n(e)},E=e=>{a&&a(e)},C=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(ea,Object.assign({$type:f},{children:r(kn,Object.assign({type:f,ref:v,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!d;break;case"week":e=!l&&!d}return e})(),onDismiss:i,minDate:g,maxDate:m,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:d,allowDisabledSelection:b,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||C(e),S.current=e},initialCalendarDate:p},{children:({calendarDate:t})=>(t=>{switch(h){case"week":return r(ta,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:g,maxDate:m,allowDisabledSelection:b,onSelect:w,onHover:$});case"fixed-range":return r(Kn,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:g,maxDate:m,allowDisabledSelection:b,onSelect:w,onHover:$,numberOfDays:F});default:return r(qn,{calendarDate:t,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:d,minDate:g,maxDate:m,isNewSelection:y,allowDisabledSelection:b,showActiveMonthDaysOnly:D,onSelect:w,onHover:$})}})(t)}))}))}));n.forwardRef(((e,t)=>{var{width:n}=e,a=f(e,["width"]);return r(Yr,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:r(na,Object.assign({ref:t},a))}))}));const aa=e=>{var{className:t,styleType:n="bordered",value:a,onSelect:o}=e,s=f(e,["className","styleType","value","onSelect"]);const[d,c]=i(a);return l((()=>{c(a)}),[a]),r(ia,Object.assign({className:t,$hasBorder:"bordered"===n},{children:r(na,Object.assign({type:"standalone",value:d,initialCalendarDate:d,onSelect:e=>{c(e),null==o||o(e)}},s))}))},ia=d.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return u`
                border: 1px solid ${Or.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{aa as Calendar};
//# sourceMappingURL=index.js.map
