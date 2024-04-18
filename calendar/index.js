import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import c,{keyframes as d,css as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as f}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as p}from"@lifesg/react-icons/external";function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b=Array.isArray,$="object"==typeof y&&y&&y.Object===Object&&y,v="object"==typeof self&&self&&self.Object===Object&&self,S=$||v||Function("return this")(),F=S.Symbol,x=F,w=Object.prototype,B=w.hasOwnProperty,H=w.toString,E=x?x.toStringTag:void 0;var A=function(e){var t=B.call(e,E),r=e[E];try{e[E]=void 0;var n=!0}catch(e){}var a=H.call(e);return n&&(t?e[E]=r:delete e[E]),a},O=Object.prototype.toString;var k=A,M=function(e){return O.call(e)},L=F?F.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?k(e):M(e)};var Y=C,T=function(e){return null!=e&&"object"==typeof e};var j=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==Y(e)},z=b,N=j,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var W=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!N(e))||(R.test(e)||!_.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=C,V=I;var Z,U=function(e){if(!V(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=S["__core-js_shared__"],G=(Z=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"";var J=function(e){return!!G&&G in e},q=Function.prototype.toString;var Q=U,K=J,ee=I,te=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},re=/^\[object .+?Constructor\]$/,ne=Function.prototype,ae=Object.prototype,ie=ne.toString,oe=ae.hasOwnProperty,se=RegExp("^"+ie.call(oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var le=function(e){return!(!ee(e)||K(e))&&(Q(e)?se:re).test(te(e))},ce=function(e,t){return null==e?void 0:e[t]};var de=function(e,t){var r=ce(e,t);return le(r)?r:void 0},ue=de(Object,"create"),he=ue;var ge=function(){this.__data__=he?he(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pe=ue,me=Object.prototype.hasOwnProperty;var ye=function(e){var t=this.__data__;if(pe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return me.call(t,e)?t[e]:void 0},De=ue,be=Object.prototype.hasOwnProperty;var $e=ue;var ve=ge,Se=fe,Fe=ye,xe=function(e){var t=this.__data__;return De?void 0!==t[e]:be.call(t,e)},we=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=ve,Be.prototype.delete=Se,Be.prototype.get=Fe,Be.prototype.has=xe,Be.prototype.set=we;var He=Be;var Ee=function(){this.__data__=[],this.size=0};var Ae=function(e,t){return e===t||e!=e&&t!=t};var Oe=function(e,t){for(var r=e.length;r--;)if(Ae(e[r][0],t))return r;return-1},ke=Oe,Me=Array.prototype.splice;var Le=Oe;var Ce=Oe;var Ye=Oe;var Te=Ee,je=function(e){var t=this.__data__,r=ke(t,e);return!(r<0)&&(r==t.length-1?t.pop():Me.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},Ne=function(e){return Ce(this.__data__,e)>-1},_e=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Re(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Re.prototype.clear=Te,Re.prototype.delete=je,Re.prototype.get=ze,Re.prototype.has=Ne,Re.prototype.set=_e;var We=Re,Ie=de(S,"Map"),Pe=He,Ve=We,Ze=Ie;var Ue=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var r=e.__data__;return Ue(t)?r["string"==typeof t?"string":"hash"]:r.map},Ge=Xe;var Je=Xe;var qe=Xe;var Qe=Xe;var Ke=function(){this.size=0,this.__data__={hash:new Pe,map:new(Ze||Ve),string:new Pe}},et=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},tt=function(e){return Je(this,e).get(e)},rt=function(e){return qe(this,e).has(e)},nt=function(e,t){var r=Qe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=Ke,at.prototype.delete=et,at.prototype.get=tt,at.prototype.has=rt,at.prototype.set=nt;var it=at;function ot(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(ot.Cache||it),r}ot.Cache=it;var st=ot;var lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/\\(\\)?/g,dt=function(e){var t=st(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lt,(function(e,r,n,a){t.push(n?a.replace(ct,"$1"):r||e)})),t}));var ut=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ht=b,gt=j,ft=F?F.prototype:void 0,pt=ft?ft.toString:void 0;var mt=function e(t){if("string"==typeof t)return t;if(ht(t))return ut(t,e)+"";if(gt(t))return pt?pt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},yt=mt;var Dt=b,bt=W,$t=dt,vt=function(e){return null==e?"":yt(e)};var St=j;var Ft=function(e,t){return Dt(e)?e:bt(e,t)?[e]:$t(vt(e))},xt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var wt=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[xt(t[r++])];return r&&r==n?e:void 0};var Bt=D((function(e,t,r){var n=null==e?void 0:wt(e,t);return void 0===n?r:n}));const Ht=(e,t,r)=>t?Bt(r,t)||Bt(e,t):r||e,Et=(e,t)=>{const r=t||e.defaultValue;return Bt(e.collections,r)};var At;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(At||(At={}));const Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kt=e=>t=>{const r=t.theme,n=Et(Ot,r[At.colorScheme]);return r.options&&r.options.color?Ht(n,e,r.options.color):Ht(n,e)},Mt={Brand:{1:kt("Brand.1"),2:kt("Brand.2"),3:kt("Brand.3"),4:kt("Brand.4"),5:kt("Brand.5"),6:kt("Brand.6")},Primary:kt("Primary"),PrimaryDark:kt("PrimaryDark"),Secondary:kt("Secondary"),Accent:{Light:{1:kt("Accent.Light.1"),2:kt("Accent.Light.2"),3:kt("Accent.Light.3"),4:kt("Accent.Light.4"),5:kt("Accent.Light.5"),6:kt("Accent.Light.6")},Dark:{1:kt("Accent.Dark.1"),2:kt("Accent.Dark.2"),3:kt("Accent.Dark.3")}},Neutral:{1:kt("Neutral.1"),2:kt("Neutral.2"),3:kt("Neutral.3"),4:kt("Neutral.4"),5:kt("Neutral.5"),6:kt("Neutral.6"),7:kt("Neutral.7"),8:kt("Neutral.8")},Validation:{Green:{Text:kt("Validation.Green.Text"),Icon:kt("Validation.Green.Icon"),Border:kt("Validation.Green.Border"),Background:kt("Validation.Green.Background")},Orange:{Text:kt("Validation.Orange.Text"),Icon:kt("Validation.Orange.Icon"),Border:kt("Validation.Orange.Border"),Background:kt("Validation.Orange.Background"),Badge:kt("Validation.Orange.Badge")},Red:{Text:kt("Validation.Red.Text"),Icon:kt("Validation.Red.Icon"),Border:kt("Validation.Red.Border"),Background:kt("Validation.Red.Background")},Blue:{Text:kt("Validation.Blue.Text"),Icon:kt("Validation.Blue.Icon"),Border:kt("Validation.Blue.Border"),Background:kt("Validation.Blue.Background")}},Shadow:{Accent:kt("Shadow.Accent"),Red:kt("Shadow.Red"),Elevation:kt("Shadow.Elevation")}},Lt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(Lt).reduce(((t,r)=>{const n=Lt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Yt=Ct("max-width"),Tt=(Ct("min-width"),c.div`
    max-width: 41rem;
    min-width: 21rem;

    ${Yt.mobileL} {
        min-width: 17.5rem;
    }
`);var jt={exports:{}};jt.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},D={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var v=function(e){return e instanceof w},S=function e(t,r,n){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),r&&($[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,a=s}return!n&&a&&(b=a),a||!n&&b},F=function(e,t){if(v(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},x=D;x.l=S,x.i=v,x.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!x.u(t)||t,d=x.p(e),g=function(e,t){var a=x.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},f=function(e,t){return x.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case u:return n?g(1,0):g(31,11);case c:return n?g(1,m):g(0,m+1);case l:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return g(n?y-$:y+(6-$),m);case s:case h:return f(D+"Hours",0);case o:return f(D+"Minutes",1);case i:return f(D+"Seconds",2);case a:return f(D+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=x.p(e),d="set"+(this.$u?"UTC":""),g=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[g](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(n,d){var h,g=this;n=Number(n);var f=x.p(d),p=function(e){var t=F(g);return x.w(t.date(t.date()+Math.round(e*n)),g)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return p(1);if(f===l)return p(7);var m=(h={},h[i]=t,h[o]=r,h[a]=e,h)[f]||1,y=this.$d.getTime()+n*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return x.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:x.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:a};return n.replace(p,(function(e,t){return t||f[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,g){var f,p=x.p(h),m=F(n),y=(m.utcOffset()-this.utcOffset())*t,D=this-m,b=x.m(this,m);return b=(f={},f[u]=b/12,f[c]=b,f[d]=b/3,f[l]=(D-y)/6048e5,f[s]=(D-y)/864e5,f[o]=D/r,f[i]=D/t,f[a]=D/e,f)[p]||D,g?b:x.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=w.prototype;return F.prototype=B,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,w,F),e.$i=!0),F},F.locale=S,F.isDayjs=v,F.unix=function(e){return F(1e3*e)},F.en=$[b],F.Ls=$,F.p={},F}();var zt=D(jt.exports),Nt={exports:{}};Nt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],g=d&&d[1];o[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,g=new Date,f=o||(a||i?1:g.getDate()),p=a||g.getFullYear(),m=0;a&&!i||(m=i>0?i-1:g.getMonth());var y=s||0,D=l||0,b=c||0,$=d||0;return u?new Date(Date.UTC(p,m,f,y,D,b,$+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,f,y,D,b,$)):new Date(p,m,f,y,D,b,$)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,f=1;f<=g;f+=1){o[1]=s[f-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}f===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var _t,Rt,Wt=D(Nt.exports),It={exports:{}},Pt=D(It.exports=(_t={year:0,month:1,day:2,hour:3,minute:4,second:5},Rt={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=Rt[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Rt[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=_t[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",f=+e;return(r.utc(g).valueOf()-(f-=f%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Vt={exports:{}};Vt.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Zt=D(Vt.exports),Ut={exports:{}};Ut.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Xt=D(Ut.exports),Gt={exports:{}};Gt.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Jt,qt=D(Gt.exports);zt.extend(Zt),zt.extend(Xt),zt.extend(qt),zt.extend(Wt),zt.extend(Pt),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=zt(t).startOf("week");return Qt(r).map((e=>Kt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Kt(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(zt(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+zt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=zt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,a)=>{const i=e.isWithinRange(t,n?zt(n):void 0,a?zt(a):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Jt||(Jt={}));const Qt=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Kt=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},er=[1,3,5,7,8,10,12],tr=[4,6,9,11];var rr,nr,ar,ir;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":er.includes(i)?Math.min(a,31).toString():tr.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=zt(e,r);return zt(t,r).diff(n,"minute")},e.toDayjs=e=>e?zt(e):zt(),e.addMinutesToTime=(e,t,r="HH:mm")=>zt(e,r).add(t,"minutes").format(r)}(rr||(rr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!zt(e).isBefore(n,"day"))||!(!a||!zt(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(zt(e).isValid())return e}return""}}(nr||(nr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ar||(ar={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ir||(ir={}));const or=c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,sr=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lr=c.div`
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
    animation: ${sr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cr=c(lr)`
    animation-delay: -0.45s;
`,dr=c(lr)`
    animation-delay: -0.3s;
`,ur=c(lr)`
    animation-delay: -0.15s;
`,hr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},gr={collections:{base:{D1:{fontFamily:hr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:hr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:hr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:hr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:hr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:hr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:hr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:hr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:hr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:hr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:hr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:hr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:hr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:hr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},fr=e=>t=>{const r=t.theme,n=Et(gr,r[At.textStyleScheme]);return r.options&&r.options.textStyle?Ht(n,e,r.options.textStyle):Ht(n,e)},pr={D1:{fontFamily:fr("D1.fontFamily"),fontSize:fr("D1.fontSize"),fontWeight:fr("D1.fontWeight"),lineHeight:fr("D1.lineHeight"),letterSpacing:fr("D1.letterSpacing")},D2:{fontFamily:fr("D2.fontFamily"),fontSize:fr("D2.fontSize"),fontWeight:fr("D2.fontWeight"),lineHeight:fr("D2.lineHeight"),letterSpacing:fr("D2.letterSpacing")},D3:{fontFamily:fr("D3.fontFamily"),fontSize:fr("D3.fontSize"),fontWeight:fr("D3.fontWeight"),lineHeight:fr("D3.lineHeight"),letterSpacing:fr("D3.letterSpacing")},D4:{fontFamily:fr("D4.fontFamily"),fontSize:fr("D4.fontSize"),fontWeight:fr("D4.fontWeight"),lineHeight:fr("D4.lineHeight"),letterSpacing:fr("D4.letterSpacing")},DBody:{fontFamily:fr("DBody.fontFamily"),fontSize:fr("DBody.fontSize"),fontWeight:fr("DBody.fontWeight"),lineHeight:fr("DBody.lineHeight"),letterSpacing:fr("DBody.letterSpacing")},H1:{fontFamily:fr("H1.fontFamily"),fontSize:fr("H1.fontSize"),fontWeight:fr("H1.fontWeight"),lineHeight:fr("H1.lineHeight"),letterSpacing:fr("H1.letterSpacing")},H2:{fontFamily:fr("H2.fontFamily"),fontSize:fr("H2.fontSize"),fontWeight:fr("H2.fontWeight"),lineHeight:fr("H2.lineHeight"),letterSpacing:fr("H2.letterSpacing")},H3:{fontFamily:fr("H3.fontFamily"),fontSize:fr("H3.fontSize"),fontWeight:fr("H3.fontWeight"),lineHeight:fr("H3.lineHeight"),letterSpacing:fr("H3.letterSpacing")},H4:{fontFamily:fr("H4.fontFamily"),fontSize:fr("H4.fontSize"),fontWeight:fr("H4.fontWeight"),lineHeight:fr("H4.lineHeight"),letterSpacing:fr("H4.letterSpacing")},H5:{fontFamily:fr("H5.fontFamily"),fontSize:fr("H5.fontSize"),fontWeight:fr("H5.fontWeight"),lineHeight:fr("H5.lineHeight"),letterSpacing:fr("H5.letterSpacing")},H6:{fontFamily:fr("H6.fontFamily"),fontSize:fr("H6.fontSize"),fontWeight:fr("H6.fontWeight"),lineHeight:fr("H6.lineHeight"),letterSpacing:fr("H6.letterSpacing")},Body:{fontFamily:fr("Body.fontFamily"),fontSize:fr("Body.fontSize"),fontWeight:fr("Body.fontWeight"),lineHeight:fr("Body.lineHeight"),letterSpacing:fr("Body.letterSpacing")},BodySmall:{fontFamily:fr("BodySmall.fontFamily"),fontSize:fr("BodySmall.fontSize"),fontWeight:fr("BodySmall.fontWeight"),lineHeight:fr("BodySmall.lineHeight"),letterSpacing:fr("BodySmall.letterSpacing")},XSmall:{fontFamily:fr("XSmall.fontFamily"),fontSize:fr("XSmall.fontSize"),fontWeight:fr("XSmall.fontWeight"),lineHeight:fr("XSmall.lineHeight"),letterSpacing:fr("XSmall.letterSpacing")}},mr=e=>{switch(e){case 700:case"bold":return hr.Bold;case 600:case"semibold":return hr.Semibold;case 300:case"light":return hr.Light;case 400:case"regular":return hr.Regular;default:return""}},yr=(e,t)=>r=>{var n;const a=pr[e].fontFamily(r),i=pr[e].fontWeight(r);return Object.values(hr).includes(a)?u`
                font-family: ${mr(t)||mr(i)||a};
                font-weight: normal !important;
            `:u`
            font-family: ${a};
            font-weight: ${null!==(n=Dr(t)||i)&&void 0!==n?n:"normal"};
        `},Dr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},br=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$r=(e,t,r=!1)=>n=>{const a=pr[e],i=a.fontSize(n);return u`
            ${yr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${u`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},vr=(e=!1,t=!1,r=void 0)=>t?u`
            display: block;
            ${br(r)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${br(r)}
        `;var Sr;!function(e){e.D1=c.h1`
        ${e=>u`
                ${$r("D1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${$r("D2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${$r("D3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${$r("D4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${$r("DBody",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${$r("H1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${$r("H2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${$r("H3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${$r("H4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${$r("H5",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${$r("H6",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${$r("Body",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${$r("BodySmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${$r("XSmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Sr||(Sr={}));const Fr=c.a`
    ${e=>u`
            ${$r(e.textStyle,e.weight)}
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
`,xr=c(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wr=r=>{var{external:n=!1,children:a}=r,i=m(r,["external","children"]);return e(Fr,Object.assign({},i,{children:[a,n&&t(xr,{})]}))};var Br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Br||(Br={}));const Hr={collections:{base:{InputBoxShadow:u`
        inset 0 0 4px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 4px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:u`
        inset 0 0 3px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 3px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Er=e=>t=>{var r;const n=t.theme,a=Et(Hr,n[At.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Ht(a,e,n.options.designToken):Ht(a,e)},Ar={InputBoxShadow:Er("InputBoxShadow"),InputErrorBoxShadow:Er("InputErrorBoxShadow"),ElevationBoxShadow:Er("ElevationBoxShadow"),Table:{Header:Er("Table.Header"),Cell:{Primary:Er("Table.Cell.Primary"),Secondary:Er("Table.Cell.Secondary"),Selected:Er("Table.Cell.Selected"),Hover:Er("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Er("Button.Danger.BackgroundColor"),Hover:Er("Button.Danger.Hover"),Primary:Er("Button.Danger.Primary"),Border:Er("Button.Danger.Border")}}},Or=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return u`
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ar.Button.Danger.Border:Mt.Primary};

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:Mt.Primary};
                `;case"light":return u`
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid ${Mt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:Mt.Primary};
                `;case"disabled":return u`
                    background-color: ${Mt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Mt.Neutral[3]};
                `;case"link":return u`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:Mt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ar.Button.Danger.Hover:Mt.Secondary};
                    }
                `;default:return u`
                    background-color: ${e.$buttonIsDanger?Ar.Button.Danger.BackgroundColor:Mt.Primary};
                    border: 1px solid transparent;

                    ${Yt.mobileL} {
                        width: 100%;
                    }

                    color: ${Mt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?u`
                    height: 2.5rem;
                    ${$r("H5","semibold")}

                    ${Yt.mobileS} {
                        height: auto;
                    }
                `:u`
                    height: 3rem;
                    ${$r("H4","semibold")}

                    ${Yt.mobileS} {
                        height: auto;
                    }
                `}
`,kr=c((({color:r,className:n,size:a=18})=>e(or,Object.assign({className:n,$size:a,$color:r},{children:[t(lr,{id:"inner1",$size:a-2,$borderWidth:2,$color:r}),t(cr,{id:"inner2",$size:a-2,$borderWidth:2,$color:r}),t(dr,{id:"inner3",$size:a-2,$borderWidth:2,$color:r}),t(ur,{id:"inner4",$size:a-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ar.Button.Danger.Primary:Mt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Mt.Neutral[3](e);break;default:t=Mt.Neutral[8](e)}return u`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Mr={Default:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(kr,Object.assign({},d)),t("span",{children:a})]}))})),Small:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(kr,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},Lr=c.button`
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
                background-color: ${Mt.Neutral[7]};
            `}
    }
`,Cr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=m(e,["children","focusHighlight","focusOutline","type"]);return t(Lr,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Yr=u`
    color: ${Mt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Tr=c(g)`
    ${Yr}
`,jr=c(f)`
    ${Yr}
`,zr=c(h)`
    ${Yr}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Nr=c.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_r=c.div`
    display: flex;
    flex: 1;
    position: relative;
`,Rr=c.div`
    isolation: isolate;
    width: 100%;
`,Wr=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Mt.Neutral[8]};

    ${e=>{if(!e.$visible)return u`
                display: none;
            `}}
`,Ir=c.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Pr=c.div`
    display: flex;
`,Vr=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?u`
                display: none;
            `:e.$expanded?u`
                ${zr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Zr=c.p`
    ${$r("H5","regular")}
`,Ur=c.div`
    display: flex;
`,Xr=c(Cr)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Gr=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Jr=c(Mr.Small)`
    flex: 1;
`,qr=c.div`
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
`,Qr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return u`
                    background-color: ${Mt.Accent.Light[6](e)};
                `;case"selected-month":return u`
                    background-color: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}}
`,Kr=c(Sr.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return u`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-month":return u`
                    ${$r("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `}}}
`,en=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const g=a((()=>Jt.generateMonths(zt(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&l,a="end"===r&&n&&e.isBefore(n,"month")&&l;return t||a},p=e=>{const t=e.format("MMMM"),r=(n=e,!Jt.isWithinRange(n,c?zt(c):void 0,d?zt(d):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":zt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||f(e),interactive:!r||u,month:t,variant:a}};return g.length?t(qr,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=p(e);return t(Qr,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Kr,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r},{children:i}))}),i)}))})):null},tn=c.div`
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
`,rn=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return u`
                    background: ${Mt.Accent.Light[6](e)};
                `;case"selected-year":return u`
                    background: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}};
`,nn=c(Sr.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return u`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-year":return u`
                    ${$r("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `;case"other-decade":return u`
                    color: ${Mt.Neutral[4](e)};
                `}}}
`,an=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const g=a((()=>Jt.generateDecadeOfYears(zt(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&l,a="end"===r&&n&&e.isBefore(n,"year")&&l;return t||a},p=e=>{const t=[0,11].includes(g.indexOf(e)),r=e.year(),n=(a=e,!Jt.isWithinRange(a,c?zt(c):void 0,d?zt(d):void 0,"year"));var a;const i=t?"other-decade":o.isSame(e,"year")?"selected-year":zt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||f(e),interactive:!n||u,year:r,variant:i}};return g.length?t(tn,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=p(e);return t(rn,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(nn,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r,$interactive:n},{children:i}))}),i)}))})):null},on=n.forwardRef(((n,a)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:g,currentFocus:f,selectedStartDate:p,selectedEndDate:y,selectWithinRange:D,dynamicHeight:b=!1,allowDisabledSelection:$,onCalendarDateChange:v,withButton:S,doneButtonDisabled:F,onDismiss:x,showNavigationHeader:w=!0,getLeftArrowDate:B,getRightArrowDate:H,isLeftArrowDisabled:E,isRightArrowDisabled:A,getMonthHeaderLabel:O,getYearHeaderLabel:k}=n,M=m(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[L,C]=i(rr.toDayjs(d)),[Y,T]=i(rr.toDayjs(d)),[j,z]=i("default"),N=o(null),_=o(null),R=o();s(a,(()=>({defaultView(){z("default")},resetView(){const e=rr.toDayjs(d);C(e),T(e),z("default")},setCalendarDate(e){const t=rr.toDayjs(e);C(t),T(t)}}))),l((()=>{const e=rr.toDayjs(d);C(e),T(e)}),[d]),l((()=>{X(Y)}),[Y]);const W=()=>{"month-options"!==j?(z("month-options"),R.current.focus()):(z("default"),C(Y))},I=()=>{"default"!==j?(z("default"),C(Y)):z("year-options")},P=()=>{R.current.focus();const e=B?B(L):L.subtract(1,"month");switch(j){case"default":T(e),C(e);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},V=()=>{R.current.focus();const e=H?H(L):L.add(1,"month");switch(j){case"default":T(e),C(e);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},Z=e=>{C(e),T(e),S||z("default")},U=()=>{const e=rr.toDayjs(d);C(e),T(e),"default"===j?G("reset"):z("default")},X=e=>{v&&v(e)},G=e=>{x&&x(e)},J=()=>{if(!h||$)return!1;const e=zt(h);return"month-options"===j?!Jt.isPreviousYearWithinRange(L,e):"year-options"===j?!Jt.isPreviousDecadeWithinRange(L,e):E?E(L):!Jt.isPreviousMonthWithinRange(L,e)},q=()=>{if(!g||$)return!1;const e=zt(g);return"month-options"===j?!Jt.isNextYearWithinRange(L,e):"year-options"===j?!Jt.isNextDecadeWithinRange(L,e):A?A(L):!Jt.isNextMonthWithinRange(L,e)},Q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Jt.getStartEndDecade(L);return`${e} to ${t}`}return k?k(L):L.format("YYYY")},K=()=>{const n=O?O(L):L.format("MMM");return e(r,{children:[e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:W},{children:[t(Zr,{children:n}),t(zr,{})]})),e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:I},{children:[t(Zr,{children:Q()}),t(zr,{})]}))]})},ee=()=>{switch(j){case"month-options":return t(en,{type:u,calendarDate:L,currentFocus:f,minDate:h,maxDate:g,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:D,onMonthSelect:Z,allowDisabledSelection:$});case"year-options":return t(an,{type:u,calendarDate:L,currentFocus:f,minDate:h,maxDate:g,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:D,onYearSelect:Z,allowDisabledSelection:$});default:return null}};return e(Nr,Object.assign({ref:R,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[w&&e(Ir,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Pr,{children:K()}),e(Ur,{children:[t(Xr,Object.assign({"data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(Tr,{})})),t(Xr,Object.assign({"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(jr,{})}))]})]})),t(_r,{children:(()=>{const n="function"==typeof c?c({calendarDate:Y,currentView:j}):c;return e(r,b?{children:["default"===j&&n,ee()]}:{children:[t(Rr,{children:n}),t(Wr,Object.assign({$visible:"default"!==j},{children:ee()}))]})})()}),(()=>{if(!S)return;const r=!!("default"===j)&&F;return e(Gr,{children:[t(Jr,Object.assign({ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Jr,Object.assign({"data-testid":"done-button",ref:N,type:"button",onClick:()=>{r||(C(Y),"default"===j?G("confirmed"):z("default"))},disabled:r},{children:"Done"}))]})})()]}))})),sn=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ln=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,cn=c.div`
    grid-column: 1 / -1;
    display: flex;
`;c.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const dn=c.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return u`
                    left: 0;
                `;case"right":return u`
                    right: 0;
                `}}}
`,un=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;c(Sr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return u`
                ${$r("H5","semibold")};
                color: ${Mt.Accent.Light[2]};
            `;if(t)return u`
                color: ${Mt.Neutral[4]};
            `;if(r)return u`
                ${$r("H5","semibold")};
                color: ${Mt.Primary};
            `;switch(n){case"other-month":return u`
                    color: ${Mt.Neutral[4]};
                `;case"today":return u`
                    color: ${Mt.Neutral[3]};
                `;case"default":return u`
                    color: ${Mt.Neutral[1]};
                `}}}
`,c(dn)`
    ${e=>{const{$selected:t}=e;if(t)return u`
                border-top: 1px solid ${Mt.Accent.Light[4]};
                border-bottom: 1px solid ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?u`
                border-top: 1px dashed ${Mt.Accent.Light[4]};
                border-bottom: 1px dashed ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[6]};
            `:r?u`
                background-color: ${Mt.Accent.Light[4]};
            `:void 0}}
`,c(un)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?u`
                background: ${Mt.Accent.Light[5]};
                border: 1px solid ${Mt.Primary};
            `:t?u`
                box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                border: 1px solid ${Mt.Accent.Light[1]};
                background-color: ${Mt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                    background-color: ${Mt.Neutral[8]};
                }
            `:r?u`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?u`
                border: 1px solid ${Mt.Accent.Light[1]};
                background: ${Mt.Accent.Light[4]};

                :hover {
                    background: ${Mt.Accent.Light[4]};
                }
            `:t?u`
                color: ${Mt.Neutral[4]};
            `:"today"===n?u`
                    background: ${Mt.Accent.Light[5]};
                `:void 0}}
`;const hn=e=>{let t=Mt.Neutral[8],r="1px solid transparent";switch(e.$type){case"current":t=Mt.Accent.Light[5];break;case"hover-dash":t=Mt.Accent.Light[6],r=`1px dashed ${Mt.Accent.Light[4](e)}`;break;case"hover-current":t=Mt.Neutral[8],r=`1px solid ${Mt.Primary(e)}`;break;case"selected":t=Mt.Accent.Light[5],r=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"selected-outline":t=Mt.Accent.Light[5],r=`1px solid ${Mt.Primary(e)}`;break;case"overlap":t=Mt.Accent.Light[4],r=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Mt.Accent.Light[4],r=`1px solid ${Mt.Primary(e)}`}return{color:t,border:r}},gn=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,fn=c.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:r}=hn(e);return u`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${r};
            border-bottom: ${r};
        `}}
`,pn=c(fn)`
    left: 0;
`,mn=c(fn)`
    right: 0;
`,yn=c.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Mt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Dn=c(yn)`
    left: 0;
`,bn=c(yn)`
    right: 0;
`,$n=c.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:r}=hn(e);return u`
                background-color: ${t};
                background-clip: content-box;
                border: ${r};
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
`,vn=c($n)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,Sn=c($n)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,Fn=c(Sr.H5)`
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

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"selected"===r?u`
                    ${$r("H5","semibold")};
                    color: ${Mt.Accent.Light[2]};
                `:u`
                color: ${Mt.Neutral[4]};
            `;switch(r){case"selected":return u`
                    ${$r("H5","semibold")};
                    color: ${Mt.Primary};
                `;case"current":return u`
                    color: ${Mt.Neutral[3]};
                `;case"unavailable":return u`
                    color: ${Mt.Neutral[4]};
                `;default:return u`
                    color: ${Mt.Neutral[1]};
                `}}}
`,xn=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:h,onHover:g,onHoverEnd:f})=>e(gn,{children:[t(Dn,{$shadow:r&&o}),t(pn,{$type:r,$shadow:r&&o}),t(vn,{$type:a,$shadow:a&&s}),t(bn,{$shadow:n&&o}),t(mn,{$type:n,$shadow:n&&o}),t(Sn,{$type:i,$shadow:i&&s}),t(Fn,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{g(u)},onMouseLeave:()=>{f&&f(u)}},{children:u.date()}))]}),wn=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,onSelect:h,onHover:g})=>{const f=Jt.isDisabledDay(e,c,s,l),p=!f||d,m=()=>{const e=zt(o),t=e.isBefore(a,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&a&&t&&(n&&r?(c=o,d=a):(s=o,l=n||a)),"end"===i&&n&&r&&(a&&t?(c=n,d=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},y={date:e,calendarDate:r,disabled:f,interactive:p,onSelect:()=>{h(e,!p)},onHover:()=>{g(e.format("YYYY-MM-DD"),!p)}};return t(xn,Object.assign({},y,(()=>{const t={};if(r.month()!==e.month())t.labelType="unavailable";else if(zt().isSame(e,"day")&&!f)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},r=e.isSame(n,"day"),i=e.isSame(a,"day");return(n&&r||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",r||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:r,hoverEnd:n,overlapStart:a,overlapEnd:i}=m();if(r&&n){if(e.isBetween(r,n,"day","[]")){const a=e.isSame(r,"day"),i=e.isSame(n,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const r=e.isSame(a,"day"),n=e.isSame(i,"day");t.labelType="selected",(r||n)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),r||(t.bgLeft="overlap"),n||(t.bgRight="overlap")}return t}return t})()))};zt.extend(Zt);const Bn=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:u,minDate:h,maxDate:g,allowDisabledSelection:f})=>{const p=a((()=>Jt.generateDays(r)),[r]),[m,y]=i(""),D=(e,t)=>{t&&!f||c(e)},b=(e,t)=>{t&&!f||(y(e),d(e))},$=()=>{y(""),d("")};return e(sn,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,r)=>t(ln,{children:t(Sr.H6,Object.assign({weight:"semibold"},{children:zt(e).format("ddd")}))},`week-day-${r}`))),p.map(((e,a)=>t(cn,Object.assign({onMouseLeave:$},{children:e.map(((e,a)=>t(wn,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:m,currentFocus:n,minDate:h,maxDate:g,disabledDates:o,allowDisabledSelection:f,isNewSelection:u,onSelect:D,onHover:b},`day-${a}`)))}),a)))]}))},Hn=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Jt.isDisabledDay(e,s,i,o),g=!h||l,{start:f,end:p}=n?Jt.getFixedRangeStartEnd(rr.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:y}=a?Jt.getFixedRangeStartEnd(rr.toDayjs(a),c):{start:void 0,end:void 0},D=n&&e.isBetween(f,p,"day","[]"),b=a&&e.isBetween(m,y,"day","[]"),$=D&&e.isSame(f,"day")||b&&e.isSame(m,"day"),v=D&&e.isSame(p,"day")||b&&e.isSame(y,"day"),S=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},F={date:e,calendarDate:r,disabled:h,interactive:g,onSelect:()=>{d(e,!g)},onHover:()=>{u(e.format("YYYY-MM-DD"),!g)}};return t(xn,Object.assign({},F,(()=>{const t={};return D||b?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":zt().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return b&&S(t,"hover-dash",r===m,r===y),D&&S(t,"selected",r===f,r===p),D&&b&&S(t,"overlap",$,v),r===f&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),r===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=f&&m<p&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},En=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u,numberOfDays:h})=>{const g=a((()=>Jt.generateDays(r)),[r]),[f,p]=i(""),m=(e,t)=>{t&&!u||(s(e),e&&!zt(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!u||(p(e),l(e))},D=()=>{p(""),l("")};return e(sn,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,r)=>t(ln,{children:t(Sr.H6,Object.assign({weight:"semibold"},{children:zt(e).format("ddd")}))},`week-day-${r}`))),g.map(((e,a)=>t(cn,Object.assign({onMouseLeave:D},{children:e.map(((e,a)=>t(Hn,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:h},`day-${a}`)))}),a)))]}))},An=c.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Mt.Neutral[8]};

    ${e=>{if("input"===e.$type)return u`
                border: 1px solid ${Mt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,On=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Jt.isDisabledDay(e,s,i,o),h=!u||l,{start:g,end:f}=Jt.getWeekStartEnd(rr.toDayjs(n)),{start:p,end:m}=Jt.getWeekStartEnd(rr.toDayjs(a)),y=n&&e.isBetween(g,f,"day","[]"),D=a&&e.isBetween(p,m,"day","[]"),b=y&&e.isSame(g)||D&&e.isSame(p),$=y&&e.isSame(f)||D&&e.isSame(m),v={date:e,calendarDate:r,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(xn,Object.assign({},v,(()=>{const t={};return y||D?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":zt().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&D?(t="hover-current",e.shadow=!0,e.circleShadow=b||$):y?t="selected-outline":D&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,$?e.circleRight=t:e.bgRight=t),e})()))},kn=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u})=>{const h=a((()=>Jt.generateDays(r)),[r]),[g,f]=i(""),p=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");s(r),e&&!zt(e).isSame(r,"month")&&f("")},m=(e,t)=>{t&&!u||(f(e),l(e))},y=()=>{f(""),l("")};return e(sn,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(ln,{children:t(Sr.H6,Object.assign({weight:"semibold"},{children:zt(e).format("ddd")}))},`week-day-${r}`))),h.map(((e,a)=>t(cn,Object.assign({onMouseLeave:y},{children:e.map(((e,a)=>t(On,{date:e,calendarDate:r,selectedDate:o,hoverDate:g,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${a}`)))}),a)))]}))},Mn=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:l,endValue:c,currentFocus:d,withButton:u,variant:h,minDate:g,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:D,numberOfDays:b},$)=>{const v=o(),S=o(void 0);s($,(()=>({reset(){v.current.resetView()},setCalendarDate(e){v.current.setCalendarDate(e)}})));const F=e=>{const t=e.format("YYYY-MM-DD");v.current.setCalendarDate(t),w(t)},x=e=>{B(e)},w=e=>{n&&n(e)},B=e=>{a&&a(e)},H=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(An,Object.assign({$type:m},{children:t(on,Object.assign({type:m,ref:v,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!c;break;case"week":e=!l&&!c}return e})(),onDismiss:i,minDate:g,maxDate:f,selectWithinRange:y,currentFocus:d,selectedStartDate:l,selectedEndDate:c,allowDisabledSelection:p,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||H(e),S.current=e},initialCalendarDate:D},{children:({calendarDate:r})=>(r=>{switch(h){case"week":return t(kn,{calendarDate:r,disabledDates:e,selectedStartDate:l,minDate:g,maxDate:f,allowDisabledSelection:p,onSelect:F,onHover:x});case"fixed-range":return t(En,{calendarDate:r,disabledDates:e,selectedStartDate:l,minDate:g,maxDate:f,allowDisabledSelection:p,onSelect:F,onHover:x,numberOfDays:b});default:return t(Bn,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:l,selectedEndDate:c,minDate:g,maxDate:f,isNewSelection:y,allowDisabledSelection:p,onSelect:F,onHover:x})}})(r)}))}))}));n.forwardRef(((e,r)=>{const n=o();return s(r,(()=>n.current)),t(Tt,{children:t(Mn,Object.assign({ref:n},e))})}));const Ln=e=>{var{className:r,styleType:n="bordered",value:a,onSelect:o}=e,s=m(e,["className","styleType","value","onSelect"]);const[c,d]=i(a);return l((()=>{d(a)}),[a]),t(Cn,Object.assign({className:r,$hasBorder:"bordered"===n},{children:t(Mn,Object.assign({type:"standalone",value:c,initialCalendarDate:c,onSelect:e=>{d(e),null==o||o(e)}},s))}))},Cn=c.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return u`
                border: 1px solid ${Mt.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{Ln as Calendar};
//# sourceMappingURL=index.js.map
