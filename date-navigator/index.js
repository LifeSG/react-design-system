import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ChevronDownIcon as n}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as r}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as a}from"@lifesg/react-icons/chevron-right";import i,{keyframes as o,css as s}from"styled-components";import l from"react";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f={exports:{}};f.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},F={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},S="en",D={};D[S]=m;var B="$isDayjsObject",v=function(e){return e instanceof H||!(!e||!e[B])},$=function e(t,n,r){var a;if(!t)return S;if("string"==typeof t){var i=t.toLowerCase();D[i]&&(a=i),n&&(D[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;D[s]=t,a=s}return!r&&a&&(S=a),a||!r&&S},b=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new H(n)},x=F;x.l=$,x.i=v,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var H=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[B]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return b(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<b(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var S=this.$locale().weekStart||0,D=(p<S?p+7:p)-S;return f(r?y-D:y+(6-D),m);case s:case h:return g(F+"Hours",0);case o:return g(F+"Minutes",1);case i:return g(F+"Seconds",2);case a:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=b(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=b(r),F=(y.utcOffset()-this.utcOffset())*t,S=this-y,D=function(){return x.m(p,y)};switch(m){case u:g=D()/12;break;case c:g=D();break;case d:g=D()/3;break;case l:g=(S-F)/6048e5;break;case s:g=(S-F)/864e5;break;case o:g=S/n;break;case i:g=S/t;break;case a:g=S/e;break;default:g=S}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=H.prototype;return b.prototype=w,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,H,b),e.$i=!0),b},b.locale=$,b.isDayjs=v,b.unix=function(e){return b(1e3*e)},b.en=D[S],b.Ls=D,b.p={},b}();var g=h(f.exports);var p=Array.isArray,m="object"==typeof u&&u&&u.Object===Object&&u,y="object"==typeof self&&self&&self.Object===Object&&self,F=m||y||Function("return this")(),S=F.Symbol,D=S,B=Object.prototype,v=B.hasOwnProperty,$=B.toString,b=D?D.toStringTag:void 0;var x=function(e){var t=v.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var a=$.call(e);return r&&(t?e[b]=n:delete e[b]),a},H=Object.prototype.toString;var w=x,E=function(e){return H.call(e)},O=S?S.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?w(e):E(e)};var M=k,A=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==M(e)},C=p,T=z,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var Y=function(e,t){if(C(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!T(e))||(_.test(e)||!W.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=k,P=I;var R,j=function(e){if(!P(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=F["__core-js_shared__"],V=(R=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var J=function(e){return!!V&&V in e},Z=Function.prototype.toString;var X=j,U=J,G=I,q=function(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,K=Function.prototype,ee=Object.prototype,te=K.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!G(e)||U(e))&&(X(e)?re:Q).test(q(e))},ie=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var n=ie(e,t);return ae(n)?n:void 0},se=oe(Object,"create"),le=se;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=se,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},ge=se,pe=Object.prototype.hasOwnProperty;var me=se;var ye=ce,Fe=de,Se=fe,De=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ye,ve.prototype.delete=Fe,ve.prototype.get=Se,ve.prototype.has=De,ve.prototype.set=Be;var $e=ve;var be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},we=He,Ee=Array.prototype.splice;var Oe=He;var ke=He;var Me=He;var Ae=be,ze=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},Ce=function(e){var t=this.__data__,n=Oe(t,e);return n<0?void 0:t[n][1]},Te=function(e){return ke(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=Me(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function _e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_e.prototype.clear=Ae,_e.prototype.delete=ze,_e.prototype.get=Ce,_e.prototype.has=Te,_e.prototype.set=We;var Ye=_e,Ie=oe(F,"Map"),Le=$e,Pe=Ye,Re=Ie;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Ne;var Je=Ne;var Ze=Ne;var Xe=Ne;var Ue=function(){this.size=0,this.__data__={hash:new Le,map:new(Re||Pe),string:new Le}},Ge=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Je(this,e).get(e)},Qe=function(e){return Ze(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ue,et.prototype.delete=Ge,et.prototype.get=qe,et.prototype.has=Qe,et.prototype.set=Ke;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,ot=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,a){t.push(r?a.replace(it,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},lt=p,ct=z,dt=S?S.prototype:void 0,ut=dt?dt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(lt(t))return st(t,e)+"";if(ct(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ft=ht;var gt=p,pt=Y,mt=ot,yt=function(e){return null==e?"":ft(e)};var Ft=z;var St=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(yt(e))},Dt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Bt=function(e,t){for(var n=0,r=(t=St(t,e)).length;null!=e&&n<r;)e=e[Dt(t[n++])];return n&&n==r?e:void 0};var vt=h((function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r}));const $t=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=bt(Ht,n[xt.colorScheme]);return n.options&&n.options.color?$t(r,e,n.options.color):$t(r,e)},Et={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")},Blue:{Text:wt("Validation.Blue.Text"),Icon:wt("Validation.Blue.Icon"),Border:wt("Validation.Blue.Border"),Background:wt("Validation.Blue.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red"),Elevation:wt("Shadow.Elevation")}},Ot={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},kt=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Mt=kt("max-width"),At=(kt("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),zt=o`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ct=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Et.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${zt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tt=i(Ct)`
    animation-delay: -0.45s;
`,Wt=i(Ct)`
    animation-delay: -0.3s;
`,_t=i(Ct)`
    animation-delay: -0.15s;
`,Yt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},It={D1:{fontFamily:Yt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Lt={D1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Pt={collections:{base:It,oneservice:{D1:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Lt},defaultValue:"base"},Rt=e=>t=>{const n=t.theme,r=bt(Pt,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?$t(r,e,n.options.textStyle):$t(r,e)},jt={D1:{fontFamily:Rt("D1.fontFamily"),fontSize:Rt("D1.fontSize"),fontWeight:Rt("D1.fontWeight"),lineHeight:Rt("D1.lineHeight"),letterSpacing:Rt("D1.letterSpacing")},D2:{fontFamily:Rt("D2.fontFamily"),fontSize:Rt("D2.fontSize"),fontWeight:Rt("D2.fontWeight"),lineHeight:Rt("D2.lineHeight"),letterSpacing:Rt("D2.letterSpacing")},D3:{fontFamily:Rt("D3.fontFamily"),fontSize:Rt("D3.fontSize"),fontWeight:Rt("D3.fontWeight"),lineHeight:Rt("D3.lineHeight"),letterSpacing:Rt("D3.letterSpacing")},D4:{fontFamily:Rt("D4.fontFamily"),fontSize:Rt("D4.fontSize"),fontWeight:Rt("D4.fontWeight"),lineHeight:Rt("D4.lineHeight"),letterSpacing:Rt("D4.letterSpacing")},DBody:{fontFamily:Rt("DBody.fontFamily"),fontSize:Rt("DBody.fontSize"),fontWeight:Rt("DBody.fontWeight"),lineHeight:Rt("DBody.lineHeight"),letterSpacing:Rt("DBody.letterSpacing")},H1:{fontFamily:Rt("H1.fontFamily"),fontSize:Rt("H1.fontSize"),fontWeight:Rt("H1.fontWeight"),lineHeight:Rt("H1.lineHeight"),letterSpacing:Rt("H1.letterSpacing")},H2:{fontFamily:Rt("H2.fontFamily"),fontSize:Rt("H2.fontSize"),fontWeight:Rt("H2.fontWeight"),lineHeight:Rt("H2.lineHeight"),letterSpacing:Rt("H2.letterSpacing")},H3:{fontFamily:Rt("H3.fontFamily"),fontSize:Rt("H3.fontSize"),fontWeight:Rt("H3.fontWeight"),lineHeight:Rt("H3.lineHeight"),letterSpacing:Rt("H3.letterSpacing")},H4:{fontFamily:Rt("H4.fontFamily"),fontSize:Rt("H4.fontSize"),fontWeight:Rt("H4.fontWeight"),lineHeight:Rt("H4.lineHeight"),letterSpacing:Rt("H4.letterSpacing")},H5:{fontFamily:Rt("H5.fontFamily"),fontSize:Rt("H5.fontSize"),fontWeight:Rt("H5.fontWeight"),lineHeight:Rt("H5.lineHeight"),letterSpacing:Rt("H5.letterSpacing")},H6:{fontFamily:Rt("H6.fontFamily"),fontSize:Rt("H6.fontSize"),fontWeight:Rt("H6.fontWeight"),lineHeight:Rt("H6.lineHeight"),letterSpacing:Rt("H6.letterSpacing")},Body:{fontFamily:Rt("Body.fontFamily"),fontSize:Rt("Body.fontSize"),fontWeight:Rt("Body.fontWeight"),lineHeight:Rt("Body.lineHeight"),letterSpacing:Rt("Body.letterSpacing")},BodySmall:{fontFamily:Rt("BodySmall.fontFamily"),fontSize:Rt("BodySmall.fontSize"),fontWeight:Rt("BodySmall.fontWeight"),lineHeight:Rt("BodySmall.lineHeight"),letterSpacing:Rt("BodySmall.letterSpacing")},XSmall:{fontFamily:Rt("XSmall.fontFamily"),fontSize:Rt("XSmall.fontSize"),fontWeight:Rt("XSmall.fontWeight"),lineHeight:Rt("XSmall.lineHeight"),letterSpacing:Rt("XSmall.letterSpacing")}},Nt=[Yt.OpenSans,Yt.PlusJakartaSans],Vt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Jt=(e,t)=>n=>{var r;const a=jt[e].fontFamily(n),i=jt[e].fontWeight(n),o=Nt.find((e=>Object.values(e).includes(a)));return o?s`
                font-family: ${Vt(o,t)||Vt(o,i)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(r=Zt(t)||i)&&void 0!==r?r:"normal"};
        `},Zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ut=(e,t,n=!1)=>r=>{const a=jt[e],i=a.fontSize(r);return s`
            ${Jt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Xt(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Xt(n)}
        `;var qt;!function(e){e.D1=i.h1`
        ${e=>s`
                ${Ut("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>s`
                ${Ut("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>s`
                ${Ut("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>s`
                ${Ut("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>s`
                ${Ut("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>s`
                ${Ut("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>s`
                ${Ut("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>s`
                ${Ut("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>s`
                ${Ut("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>s`
                ${Ut("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>s`
                ${Ut("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>s`
                ${Ut("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>s`
                ${Ut("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>s`
                ${Ut("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Gt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>en(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>en(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(qt||(qt={}));const Qt=i.a`
    ${e=>s`
            ${Ut(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,Kt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,en=n=>{var{external:r=!1,children:a}=n,i=d(n,["external","children"]);return e(Qt,Object.assign({},i,{children:[a,r&&t(Kt,{})]}))};var tn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(tn||(tn={}));const nn={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},rn=e=>t=>{var n;const r=t.theme,a=bt(nn,r[xt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?$t(a,e,r.options.designToken):$t(a,e)},an={InputBoxShadow:rn("InputBoxShadow"),InputErrorBoxShadow:rn("InputErrorBoxShadow"),ElevationBoxShadow:rn("ElevationBoxShadow"),Table:{Header:rn("Table.Header"),Cell:{Primary:rn("Table.Cell.Primary"),Secondary:rn("Table.Cell.Secondary"),Selected:rn("Table.Cell.Selected"),Hover:rn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:rn("Button.Danger.BackgroundColor"),Hover:rn("Button.Danger.Hover"),Primary:rn("Button.Danger.Primary"),Border:rn("Button.Danger.Border")}}},on=i.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return s`
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?an.Button.Danger.Border:Et.Primary};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:Et.Primary};
                `;case"light":return s`
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid ${Et.Neutral[5]};

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:Et.Primary};
                `;case"disabled":return s`
                    background-color: ${Et.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Et.Neutral[3]};
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?an.Button.Danger.Primary:Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?an.Button.Danger.Hover:Et.Secondary};
                    }
                `;default:return s`
                    background-color: ${e.$buttonIsDanger?an.Button.Danger.BackgroundColor:Et.Primary};
                    border: 1px solid transparent;

                    ${Mt.mobileL} {
                        width: 100%;
                    }

                    color: ${Et.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    ${Ut("H5","semibold")}

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    ${Ut("H4","semibold")}

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `}
`,sn=i((({color:n,className:r,size:a=18})=>e(At,Object.assign({className:r,$size:a,$color:n},{children:[t(Ct,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(Tt,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(Wt,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(_t,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?an.Button.Danger.Primary:Et.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Et.Neutral[3](e);break;default:t=Et.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ln={Default:l.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=d(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(on,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[o&&t(sn,Object.assign({},u)),t("span",{children:a})]}))})),Small:l.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=d(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(on,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[o&&t(sn,Object.assign({},u,{size:16})),t("span",{children:a})]}))}))},cn=i.button`
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

        ${({$highlight:e})=>e&&s`
                background-color: ${Et.Neutral[7]};
            `}
    }
`,dn=l.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=d(e,["children","focusHighlight","focusOutline","type"]);return t(cn,Object.assign({ref:n,$outline:i,$highlight:a,type:o},s,{children:r}))})),un=s`
    color: ${Et.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,hn=i(r)`
    ${un}
`,fn=i(a)`
    ${un}
`,gn=i(n)`
    ${un}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`;i.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,i.div`
    display: flex;
    flex: 1;
    position: relative;
`,i.div`
    isolation: isolate;
    width: 100%;
`,i.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Et.Neutral[8]};

    ${e=>{if(!e.$visible)return s`
                display: none;
            `}}
`,i.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,i.div`
    display: flex;
`,i.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?s`
                display: none;
            `:e.$expanded?s`
                ${gn} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,i.p`
    ${Ut("H5","regular")}
`,i.div`
    display: flex;
`,i(dn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,i.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,i(ln.Small)`
    flex: 1;
`;var pn={exports:{}};pn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(r),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=s||0,F=l||0,S=c||0,D=d||0;return u?new Date(Date.UTC(p,m,g,y,F,S,D+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,S,D)):new Date(p,m,g,y,F,S,D)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var mn=h(pn.exports),yn={exports:{}};yn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Fn=h(yn.exports),Sn={exports:{}};Sn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Dn=h(Sn.exports),Bn={exports:{}};Bn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var vn,$n,bn,xn=h(Bn.exports),Hn={exports:{}},wn=h(Hn.exports=(vn={year:0,month:1,day:2,hour:3,minute:4,second:5},$n={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=$n[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$n[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=vn[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,s=a||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));g.extend(Fn),g.extend(xn),g.extend(Dn),g.extend(mn),g.extend(wn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=g(t).startOf("week");return En(n).map((e=>On(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return On(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(g(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+g(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=g(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?g(r):void 0,a?g(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(bn||(bn={}));const En=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},On=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},kn=[1,3,5,7,8,10,12],Mn=[4,6,9,11];var An,zn,Cn,Tn;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":kn.includes(i)?Math.min(a,31).toString():Mn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=g(e,n);return g(t,n).diff(r,"minute")},e.toDayjs=e=>e?g(e):g(),e.addMinutesToTime=(e,t,n="HH:mm")=>g(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>g(e).isSame(g(t),n)}(An||(An={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!g(e).isBefore(r,"day"))||!(!a||!g(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(g(e).isValid())return e}return""}}(zn||(zn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Cn||(Cn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Tn||(Tn={}));const Wn=i(dn)`
    height: 2.5rem;
    padding: 1rem;
    :disabled {
        cursor: not-allowed;
        > svg {
            color: ${Et.Neutral[5]};
        }
    }
`,_n=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Yn=i.div`
    text-align: center;
`,In=i(qt.H4)`
    color: ${Et.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
`,Ln=i(qt.XSmall)`
    color: ${Et.Neutral[2]};
`,Pn=n=>{var{selectedDate:r,minDate:a,maxDate:i,loading:o,onLeftArrowClick:s,onRightArrowClick:l}=n,c=d(n,["selectedDate","minDate","maxDate","loading","onLeftArrowClick","onRightArrowClick"]);const u=An.toDayjs(r),h=An.toDayjs(r).format("D MMMM YYYY").toString(),f=An.isSame(r,g())?"Today":An.toDayjs(r).format("dddd");return e(_n,Object.assign({},c,{children:[s&&t(Wn,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:o||!!a&&(bn.isDisabledDay(u,void 0,a)||An.isSame(u,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:()=>s(r)},{children:t(hn,{})})),e(Yn,{children:[t(In,Object.assign({"data-testid":"date-navigator-date-text",weight:"semibold"},{children:h})),t(Ln,Object.assign({"data-testid":"date-navigator-day-text",weight:"bold"},{children:f}))]}),l&&t(Wn,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:o||!!i&&(bn.isDisabledDay(u,void 0,void 0,i)||An.isSame(u,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:()=>l(r)},{children:t(fn,{})}))]}))};export{Pn as DateNavigator};
//# sourceMappingURL=index.js.map
