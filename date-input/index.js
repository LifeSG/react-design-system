import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as a,useEffect as i}from"react";import o,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u={exports:{}};u.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",c="week",u="month",s="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},S={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,u),i=n-a<0,o=e.clone().add(r+(i?-1:1),u);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:l,D:d,h:o,m:i,s:a,ms:r,Q:s}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",v={};v[$]=y;var F=function(t){return t instanceof H},D=function t(e,n,r){var a;if(!e)return $;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(a=i),n&&(v[i]=n,a=i);var o=e.split("-");if(!a&&o.length>1)return t(o[0])}else{var l=e.name;v[l]=e,a=l}return!r&&a&&($=a),a||!r&&$},B=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new H(n)},b=S;b.l=D,b.i=F,b.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var H=function(){function y(t){this.$L=D(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return B(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<B(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,s=b.p(t),f=function(t,e){var a=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(l)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,y=this.$M,m=this.$D,S="set"+(this.$u?"UTC":"");switch(s){case h:return r?f(1,0):f(31,11);case u:return r?f(1,y):f(0,y+1);case c:var $=this.$locale().weekStart||0,v=(p<$?p+7:p)-$;return f(r?m-v:m+(6-v),y);case l:case d:return g(S+"Hours",0);case o:return g(S+"Minutes",1);case i:return g(S+"Seconds",2);case a:return g(S+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=b.p(t),s="set"+(this.$u?"UTC":""),f=(n={},n[l]=s+"Date",n[d]=s+"Date",n[u]=s+"Month",n[h]=s+"FullYear",n[o]=s+"Hours",n[i]=s+"Minutes",n[a]=s+"Seconds",n[r]=s+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,s){var d,f=this;r=Number(r);var g=b.p(s),p=function(t){var e=B(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===u)return this.set(u,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===l)return p(1);if(g===c)return p(7);var y=(d={},d[i]=e,d[o]=n,d[a]=t,d)[g]||1,m=this.$d.getTime()+r*y;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=b.z(this),i=this.$H,o=this.$m,l=this.$M,c=n.weekdays,u=n.months,s=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},h=function(t){return b.s(i%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:b.s(l+1,2,"0"),MMM:s(n.monthsShort,l,u,3),MMMM:s(u,l),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:s(n.weekdaysMin,this.$W,c,2),ddd:s(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:b.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,o,!0),A:d(i,o,!1),m:String(o),mm:b.s(o,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:a};return r.replace(p,(function(t,e){return e||g[t]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,f){var g,p=b.p(d),y=B(r),m=(y.utcOffset()-this.utcOffset())*e,S=this-y,$=b.m(this,y);return $=(g={},g[h]=$/12,g[u]=$,g[s]=$/3,g[c]=(S-m)/6048e5,g[l]=(S-m)/864e5,g[o]=S/n,g[i]=S/e,g[a]=S/t,g)[p]||S,f?$:b.a($)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),w=H.prototype;return B.prototype=w,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",u],["$y",h],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,H,B),t.$i=!0),B},B.locale=D,B.isDayjs=F,B.unix=function(t){return B(1e3*t)},B.en=v[$],B.Ls=v,B.p={},B}();var s,h=u.exports;!function(t){t.generateDays=t=>{const e=t.startOf("month"),n=h(e).startOf("week");return d(n).map((t=>f(t)))},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(h(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),a=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)a.push(r.add(t,"year"));return a},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+h(`${e+9}-01-01`).format("YYYY")}}}(s||(s={}));const d=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},f=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},g=[1,3,5,7,8,10,12],p=[4,6,9,11];var y,m,S;!function(t){t.clampDay=(e,n,r)=>{const a=parseInt(e),i=parseInt(n),o=parseInt(r);return 0==a?"1":g.includes(i)?Math.min(a,31).toString():p.includes(i)?Math.min(a,30).toString():2===i?t.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=h(t,n);return h(e,n).diff(r,"minute")}}(y||(y={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(m||(m={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let a=0;e>n&&(a=Math.floor((e-n)/8));const i=r+a;if(i<t.length){const e=Math.floor(i/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(S||(S={}));var $=Array.isArray,v="object"==typeof c&&c&&c.Object===Object&&c,F="object"==typeof self&&self&&self.Object===Object&&self,D=v||F||Function("return this")(),B=D.Symbol,b=B,H=Object.prototype,w=H.hasOwnProperty,_=H.toString,x=b?b.toStringTag:void 0;var O=function(t){var e=w.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var a=_.call(t);return r&&(e?t[x]=n:delete t[x]),a},M=Object.prototype.toString;var C=O,k=function(t){return M.call(t)},E=B?B.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?C(t):k(t)};var A=z,W=function(t){return null!=t&&"object"==typeof t};var T=function(t){return"symbol"==typeof t||W(t)&&"[object Symbol]"==A(t)},V=$,N=T,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var j=function(t,e){if(V(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!N(t))||(L.test(t)||!I.test(t)||null!=e&&t in Object(e))};var Y=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R=z,P=Y;var X,G=function(t){if(!P(t))return!1;var e=R(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Z=D["__core-js_shared__"],U=(X=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"";var J=function(t){return!!U&&U in t},K=Function.prototype.toString;var q=G,Q=J,tt=Y,et=function(t){if(null!=t){try{return K.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,rt=Function.prototype,at=Object.prototype,it=rt.toString,ot=at.hasOwnProperty,lt=RegExp("^"+it.call(ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ct=function(t){return!(!tt(t)||Q(t))&&(q(t)?lt:nt).test(et(t))},ut=function(t,e){return null==t?void 0:t[e]};var st=function(t,e){var n=ut(t,e);return ct(n)?n:void 0},ht=st(Object,"create"),dt=ht;var ft=function(){this.__data__=dt?dt(null):{},this.size=0};var gt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},pt=ht,yt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;if(pt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return yt.call(e,t)?e[t]:void 0},St=ht,$t=Object.prototype.hasOwnProperty;var vt=ht;var Ft=ft,Dt=gt,Bt=mt,bt=function(t){var e=this.__data__;return St?void 0!==e[t]:$t.call(e,t)},Ht=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vt&&void 0===e?"__lodash_hash_undefined__":e,this};function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}wt.prototype.clear=Ft,wt.prototype.delete=Dt,wt.prototype.get=Bt,wt.prototype.has=bt,wt.prototype.set=Ht;var _t=wt;var xt=function(){this.__data__=[],this.size=0};var Ot=function(t,e){return t===e||t!=t&&e!=e};var Mt=function(t,e){for(var n=t.length;n--;)if(Ot(t[n][0],e))return n;return-1},Ct=Mt,kt=Array.prototype.splice;var Et=Mt;var zt=Mt;var At=Mt;var Wt=xt,Tt=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():kt.call(e,n,1),--this.size,!0)},Vt=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Nt=function(t){return zt(this.__data__,t)>-1},It=function(t,e){var n=this.__data__,r=At(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=Wt,Lt.prototype.delete=Tt,Lt.prototype.get=Vt,Lt.prototype.has=Nt,Lt.prototype.set=It;var jt=Lt,Yt=st(D,"Map"),Rt=_t,Pt=jt,Xt=Yt;var Gt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Zt=function(t,e){var n=t.__data__;return Gt(e)?n["string"==typeof e?"string":"hash"]:n.map},Ut=Zt;var Jt=Zt;var Kt=Zt;var qt=Zt;var Qt=function(){this.size=0,this.__data__={hash:new Rt,map:new(Xt||Pt),string:new Rt}},te=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e},ee=function(t){return Jt(this,t).get(t)},ne=function(t){return Kt(this,t).has(t)},re=function(t,e){var n=qt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ae(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ae.prototype.clear=Qt,ae.prototype.delete=te,ae.prototype.get=ee,ae.prototype.has=ne,ae.prototype.set=re;var ie=ae;function oe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(oe.Cache||ie),n}oe.Cache=ie;var le=oe;var ce=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ue=/\\(\\)?/g,se=function(t){var e=le(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ce,(function(t,n,r,a){e.push(r?a.replace(ue,"$1"):n||t)})),e}));var he=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},de=$,fe=T,ge=B?B.prototype:void 0,pe=ge?ge.toString:void 0;var ye=function t(e){if("string"==typeof e)return e;if(de(e))return he(e,t)+"";if(fe(e))return pe?pe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},me=ye;var Se=$,$e=j,ve=se,Fe=function(t){return null==t?"":me(t)};var De=T;var Be=function(t,e){return Se(t)?t:$e(t,e)?[t]:ve(Fe(t))},be=function(t){if("string"==typeof t||De(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var He=function(t,e){for(var n=0,r=(e=Be(e,t)).length;null!=t&&n<r;)t=t[be(e[n++])];return n&&n==r?t:void 0};var we=function(t,e,n){var r=null==t?void 0:He(t,e);return void 0===r?n:r};const _e=(t,e,n)=>e?we(n,e)||we(t,e):n||t,xe=(t,e)=>{const n=e||t.defaultValue;return we(t.collections,n)};var Oe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Oe||(Oe={}));const Me={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=xe(Me,n[Oe.colorScheme]);return n.options&&n.options.color?_e(r,t,n.options.color):_e(r,t)},ke={Brand:{1:Ce("Brand.1"),2:Ce("Brand.2"),3:Ce("Brand.3"),4:Ce("Brand.4"),5:Ce("Brand.5"),6:Ce("Brand.6")},Primary:Ce("Primary"),PrimaryDark:Ce("PrimaryDark"),Secondary:Ce("Secondary"),Accent:{Light:{1:Ce("Accent.Light.1"),2:Ce("Accent.Light.2"),3:Ce("Accent.Light.3"),4:Ce("Accent.Light.4"),5:Ce("Accent.Light.5"),6:Ce("Accent.Light.6")},Dark:{1:Ce("Accent.Dark.1"),2:Ce("Accent.Dark.2"),3:Ce("Accent.Dark.3")}},Neutral:{1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")},Validation:{Green:{Text:Ce("Validation.Green.Text"),Icon:Ce("Validation.Green.Icon"),Border:Ce("Validation.Green.Border"),Background:Ce("Validation.Green.Background")},Orange:{Text:Ce("Validation.Orange.Text"),Icon:Ce("Validation.Orange.Icon"),Border:Ce("Validation.Orange.Border"),Background:Ce("Validation.Orange.Background"),Badge:Ce("Validation.Orange.Badge")},Red:{Text:Ce("Validation.Red.Text"),Icon:Ce("Validation.Red.Icon"),Border:Ce("Validation.Red.Border"),Background:Ce("Validation.Red.Background")},Blue:{Text:Ce("Validation.Blue.Text"),Icon:Ce("Validation.Blue.Icon"),Border:Ce("Validation.Blue.Border"),Background:Ce("Validation.Blue.Background")}},Shadow:{Accent:Ce("Shadow.Accent"),Red:Ce("Shadow.Red"),Elevation:Ce("Shadow.Elevation")}},Ee={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${ke.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${ke.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${ke.Shadow.Elevation}
 `}},defaultValue:"base"},ze=t=>e=>{const n=e.theme,r=xe(Ee,n[Oe.designTokenScheme]);return n.options?.designToken?_e(r,t,n.options.designToken):_e(r,t)},Ae=ze("InputBoxShadow"),We=ze("InputErrorBoxShadow"),Te=(ze("ElevationBoxShadow"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ve={collections:{base:{D1:{fontFamily:Te.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Te.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Te.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Te.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Te.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Te.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Te.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Te.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Te.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Te.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Te.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Te.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Te.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Te.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ne=t=>e=>{const n=e.theme,r=xe(Ve,n[Oe.textStyleScheme]);return n.options&&n.options.textStyle?_e(r,t,n.options.textStyle):_e(r,t)},Ie={D1:{fontFamily:Ne("D1.fontFamily"),fontSize:Ne("D1.fontSize"),fontWeight:Ne("D1.fontWeight"),lineHeight:Ne("D1.lineHeight"),letterSpacing:Ne("D1.letterSpacing")},D2:{fontFamily:Ne("D2.fontFamily"),fontSize:Ne("D2.fontSize"),fontWeight:Ne("D2.fontWeight"),lineHeight:Ne("D2.lineHeight"),letterSpacing:Ne("D2.letterSpacing")},D3:{fontFamily:Ne("D3.fontFamily"),fontSize:Ne("D3.fontSize"),fontWeight:Ne("D3.fontWeight"),lineHeight:Ne("D3.lineHeight"),letterSpacing:Ne("D3.letterSpacing")},D4:{fontFamily:Ne("D4.fontFamily"),fontSize:Ne("D4.fontSize"),fontWeight:Ne("D4.fontWeight"),lineHeight:Ne("D4.lineHeight"),letterSpacing:Ne("D4.letterSpacing")},DBody:{fontFamily:Ne("DBody.fontFamily"),fontSize:Ne("DBody.fontSize"),fontWeight:Ne("DBody.fontWeight"),lineHeight:Ne("DBody.lineHeight"),letterSpacing:Ne("DBody.letterSpacing")},H1:{fontFamily:Ne("H1.fontFamily"),fontSize:Ne("H1.fontSize"),fontWeight:Ne("H1.fontWeight"),lineHeight:Ne("H1.lineHeight"),letterSpacing:Ne("H1.letterSpacing")},H2:{fontFamily:Ne("H2.fontFamily"),fontSize:Ne("H2.fontSize"),fontWeight:Ne("H2.fontWeight"),lineHeight:Ne("H2.lineHeight"),letterSpacing:Ne("H2.letterSpacing")},H3:{fontFamily:Ne("H3.fontFamily"),fontSize:Ne("H3.fontSize"),fontWeight:Ne("H3.fontWeight"),lineHeight:Ne("H3.lineHeight"),letterSpacing:Ne("H3.letterSpacing")},H4:{fontFamily:Ne("H4.fontFamily"),fontSize:Ne("H4.fontSize"),fontWeight:Ne("H4.fontWeight"),lineHeight:Ne("H4.lineHeight"),letterSpacing:Ne("H4.letterSpacing")},H5:{fontFamily:Ne("H5.fontFamily"),fontSize:Ne("H5.fontSize"),fontWeight:Ne("H5.fontWeight"),lineHeight:Ne("H5.lineHeight"),letterSpacing:Ne("H5.letterSpacing")},H6:{fontFamily:Ne("H6.fontFamily"),fontSize:Ne("H6.fontSize"),fontWeight:Ne("H6.fontWeight"),lineHeight:Ne("H6.lineHeight"),letterSpacing:Ne("H6.letterSpacing")},Body:{fontFamily:Ne("Body.fontFamily"),fontSize:Ne("Body.fontSize"),fontWeight:Ne("Body.fontWeight"),lineHeight:Ne("Body.lineHeight"),letterSpacing:Ne("Body.letterSpacing")},BodySmall:{fontFamily:Ne("BodySmall.fontFamily"),fontSize:Ne("BodySmall.fontSize"),fontWeight:Ne("BodySmall.fontWeight"),lineHeight:Ne("BodySmall.lineHeight"),letterSpacing:Ne("BodySmall.letterSpacing")},XSmall:{fontFamily:Ne("XSmall.fontFamily"),fontSize:Ne("XSmall.fontSize"),fontWeight:Ne("XSmall.fontWeight"),lineHeight:Ne("XSmall.lineHeight"),letterSpacing:Ne("XSmall.letterSpacing")}},Le=t=>{switch(t){case 700:case"bold":return Te.Bold;case 600:case"semibold":return Te.Semibold;case 300:case"light":return Te.Light;case 400:case"regular":return Te.Regular;default:return""}},je=(t,e)=>n=>{const r=Ie[t].fontFamily(n),a=Ie[t].fontWeight(n);return Object.values(Te).includes(r)?l`
                font-family: ${Le(e)||Le(a)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Ye(e)||a)??"normal"};
        `},Ye=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Re=(t,e,n=!1)=>r=>{const a=Ie[t],i=a.fontSize(r);return l`
            ${je(t,e)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Pe=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var Xe,Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});var Ze=t;const Ue=t=>Ze.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ze.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Je;Ue.displayName="ExternalIcon",Xe=Ge.ExternalIcon=Ue,function(t){t.D1=o.h1`
        ${t=>l`
                ${Re("D1",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>l`
                ${Re("D2",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>l`
                ${Re("D3",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>l`
                ${Re("D4",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>l`
                ${Re("DBody",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>l`
                ${Re("H1",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>l`
                ${Re("H2",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>l`
                ${Re("H3",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>l`
                ${Re("H4",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>l`
                ${Re("H5",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>l`
                ${Re("H6",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>l`
                ${Re("Body",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>l`
                ${Re("BodySmall",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>l`
                ${Re("XSmall",t.weight,t.paragraph)}
                color: ${ke.Neutral[1]};
                ${Pe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Qe({...t,textStyle:"Body"}),Small:t=>Qe({...t,textStyle:"BodySmall"})}}(Je||(Je={}));const Ke=o.a`
    ${t=>l`
            ${Re(t.textStyle,t.weight)}
            color: ${ke.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ke.Secondary};

                svg {
                    color: ${ke.Secondary};
                }
            }
        `}
`,qe=o(Xe)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qe=({external:t=!1,children:r,...a})=>e(Ke,{...a,children:[r,t&&n(qe,{})]}),tn=o.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${ke.Neutral[5]};
    border-radius: 4px;
    background: ${ke.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${ke.Accent.Light[1]};
        box-shadow: ${Ae};
    }

    ${t=>t.$readOnly?l`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:t.disabled?l`
                background: ${ke.Neutral[6](t)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ke.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.$error?l`
                border: 1px solid ${ke.Validation.Red.Border(t)};

                :focus-within {
                    border: 1px solid ${ke.Validation.Red.Border(t)};
                    box-shadow: ${We};
                }
            `:void 0}
`,en=o.div`
    position: absolute;
    top: 0;
    left: ${t=>t.$readOnly?"-0.5rem":"1rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,nn=o.input`
    ${Re("Body","regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
    border: none;
    text-align: center;
    padding: 0;

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

    :focus,
    :active {
        outline: none;
    }

    ${t=>{if(t.disabled)return l`
                cursor: not-allowed;
            `}}
`,rn=o(nn)`
    width: 2.6rem;
`,an=o(nn)`
    width: 3.5rem;
`,on=o(Je.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${t=>{if(t.$hide)return l`
                color: ${ke.Neutral[3]};
            `}}
`;o(on)`
    ${t=>{if(t.$compress)return l`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const ln=({disabled:t,error:o,value:l,onChange:c,onBlur:u,onChangeRaw:s,onBlurRaw:h,readOnly:d,id:f,...g})=>{const[p,m]=r(""),[$,v]=r(""),[F,D]=r(""),[B,b]=r("none"),H=a(null),w=a(null),_=a(null),x=a(null),O=a(p),M=a($),C=a(F),k=a(B),E=t=>{O.current=t,m(t)},z=t=>{M.current=t,v(t)},A=t=>{C.current=t,D(t)},W=t=>{k.current=t,b(t)};i((()=>(document.addEventListener("mousedown",T),H.current&&H.current.addEventListener("keydown",V),()=>{document.removeEventListener("mousedown",T),H.current&&H.current.removeEventListener("keydown",V)})),[B]),i((()=>{"day"===B&&2===p.length&&_.current&&_.current.focus()}),[p]),i((()=>{"month"===B&&2===$.length&&x.current&&x.current.focus()}),[$]),i((()=>{Y(l)}),[l]);const T=e=>{t||d||H&&H.current.contains(e.target)||"none"!==k.current&&(W("none"),P())},V=t=>{"year"===t.target.name&&"Tab"===t.code&&(W("none"),P())},N=t=>{W(t.target.name),t.target.select()},I=t=>{const e=t.target.name,n=S.padValue(t.target.value,!0);switch(e){case"day":E(n);break;case"month":z(n)}const r=p.length&&$.length&&4===F.length,a="day"===e,i=y.clampMonth($);r&&(E(S.padValue(y.clampDay(a?n:p,i,F))),z(S.padValue(i)))},L=t=>{const e=t.target.name,n=t.target.value.replace(/[^0-9]/g,"");switch(e){case"day":E(n),R(n,e);break;case"month":z(n),R(n,e);break;case"year":A(n),R(n,e)}},j=t=>{"Backspace"!==t.code&&"Backspace"!==t.key||("month"===B&&0===$.length&&w.current.focus(),"year"===B&&0===F.length&&_.current.focus())},Y=t=>{if(void 0===t||""===t)E(""),z(""),A("");else{const e=new Date(t);if(!isNaN(e.getTime())){const t=(e.getMonth()+1).toString(),n=e.getFullYear().toString(),r=y.clampDay(e.getDate().toString(),t,n);E(S.padValue(r)),z(S.padValue(t)),A(n)}}},R=(t,e)=>{if(c){const n={day:p,month:$,year:F};n[e]=t;const r=X(n);c(r)}if(s){const n=[..."day"===e?[S.padValue(t)]:[p],..."month"===e?[S.padValue(t)]:[$],..."year"===e?[t]:[F]];s(n)}},P=()=>{if(u){const t={day:O.current,month:M.current,year:C.current},e=X(t);u(e)}if(h){const t=[S.padValue(O.current.toString()),S.padValue(M.current.toString()),C.current];h(t)}},X=t=>{const e=[t.year,t.month,t.day];return t.day.length>=1&&t.month.length>=1&&4===t.year.length?e.join("-"):e.every((t=>""===t))?"":cn};return n(tn,{ref:H,onClick:()=>{"none"===B&&w.current&&w.current.focus()},disabled:t,$error:o,id:f,"data-testid":g["data-testid"],$readOnly:d,children:e(en,{$readOnly:d,children:[n(nn,{name:"day",maxLength:2,value:p,ref:w,onFocus:N,onBlur:I,onChange:L,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input",readOnly:d,placeholder:"day"!==B||d?"DD":""}),n(on,{$hide:0===p.length,children:"/"}),n(rn,{name:"month",maxLength:2,value:$,ref:_,onFocus:N,onBlur:I,onChange:L,onKeyDown:j,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input",readOnly:d,placeholder:"month"!==B||d?"MM":""}),n(on,{$hide:0===$.length,children:"/"}),n(an,{name:"year",maxLength:4,value:F,ref:x,onFocus:N,onBlur:I,onChange:L,onKeyDown:j,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input",readOnly:d,placeholder:"year"!==B||d?"YYYY":""})]})})},cn="Invalid date";export{ln as DateInput};
//# sourceMappingURL=index.js.map
