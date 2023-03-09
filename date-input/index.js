import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as a,useEffect as i}from"react";import o,{css as l}from"styled-components";var c,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s={exports:{}},h=s.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",c="week",u="month",s="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},S={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,u),i=n-a<0,o=e.clone().add(r+(i?-1:1),u);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:l,D:d,h:o,m:i,s:a,ms:r,Q:s}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",v={};v[$]=y;var F=function(t){return t instanceof b},D=function t(e,n,r){var a;if(!e)return $;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(a=i),n&&(v[i]=n,a=i);var o=e.split("-");if(!a&&o.length>1)return t(o[0])}else{var l=e.name;v[l]=e,a=l}return!r&&a&&($=a),a||!r&&$},B=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},H=S;H.l=D,H.i=F,H.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function y(t){this.$L=D(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return H},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return B(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<B(t)},m.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!H.u(e)||e,s=H.p(t),f=function(t,e){var a=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(l)},g=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,y=this.$M,m=this.$D,S="set"+(this.$u?"UTC":"");switch(s){case h:return r?f(1,0):f(31,11);case u:return r?f(1,y):f(0,y+1);case c:var $=this.$locale().weekStart||0,v=(p<$?p+7:p)-$;return f(r?m-v:m+(6-v),y);case l:case d:return g(S+"Hours",0);case o:return g(S+"Minutes",1);case i:return g(S+"Seconds",2);case a:return g(S+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=H.p(t),s="set"+(this.$u?"UTC":""),f=(n={},n[l]=s+"Date",n[d]=s+"Date",n[u]=s+"Month",n[h]=s+"FullYear",n[o]=s+"Hours",n[i]=s+"Minutes",n[a]=s+"Seconds",n[r]=s+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[H.p(t)]()},m.add=function(r,s){var d,f=this;r=Number(r);var g=H.p(s),p=function(t){var e=B(f);return H.w(e.date(e.date()+Math.round(t*r)),f)};if(g===u)return this.set(u,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===l)return p(1);if(g===c)return p(7);var y=(d={},d[i]=e,d[o]=n,d[a]=t,d)[g]||1,m=this.$d.getTime()+r*y;return H.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=H.z(this),i=this.$H,o=this.$m,l=this.$M,c=n.weekdays,u=n.months,s=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},h=function(t){return H.s(i%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:H.s(l+1,2,"0"),MMM:s(n.monthsShort,l,u,3),MMMM:s(u,l),D:this.$D,DD:H.s(this.$D,2,"0"),d:String(this.$W),dd:s(n.weekdaysMin,this.$W,c,2),ddd:s(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:H.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,o,!0),A:d(i,o,!1),m:String(o),mm:H.s(o,2,"0"),s:String(this.$s),ss:H.s(this.$s,2,"0"),SSS:H.s(this.$ms,3,"0"),Z:a};return r.replace(p,(function(t,e){return e||g[t]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,f){var g,p=H.p(d),y=B(r),m=(y.utcOffset()-this.utcOffset())*e,S=this-y,$=H.m(this,y);return $=(g={},g[h]=$/12,g[u]=$,g[s]=$/3,g[c]=(S-m)/6048e5,g[l]=(S-m)/864e5,g[o]=S/n,g[i]=S/e,g[a]=S/t,g)[p]||S,f?$:H.a($)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return H.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),w=b.prototype;return B.prototype=w,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",u],["$y",h],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,b,B),t.$i=!0),B},B.locale=D,B.isDayjs=F,B.unix=function(t){return B(1e3*t)},B.en=v[$],B.Ls=v,B.p={},B}();!function(t){t.generateDays=t=>{const e=t.startOf("month"),n=h(e).startOf("week");return d(n).map((t=>f(t)))},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(h(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),a=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)a.push(r.add(t,"year"));return a},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+h(`${e+9}-01-01`).format("YYYY")}}}(c||(c={}));const d=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},f=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},g=[1,3,5,7,8,10,12],p=[4,6,9,11];var y,m;!function(t){t.clampDay=(e,n,r)=>{const a=parseInt(e),i=parseInt(n),o=parseInt(r);return 0==a?"1":g.includes(i)?Math.min(a,31).toString():p.includes(i)?Math.min(a,30).toString():2===i?t.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0}(y||(y={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let a=0;e>n&&(a=Math.floor((e-n)/8));const i=r+a;if(i<t.length){const e=Math.floor(i/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(m||(m={}));var S=Array.isArray,$="object"==typeof u&&u&&u.Object===Object&&u,v="object"==typeof self&&self&&self.Object===Object&&self,F=$||v||Function("return this")(),D=F.Symbol,B=D,H=Object.prototype,b=H.hasOwnProperty,w=H.toString,_=B?B.toStringTag:void 0;var x=function(t){var e=b.call(t,_),n=t[_];try{t[_]=void 0;var r=!0}catch(t){}var a=w.call(t);return r&&(e?t[_]=n:delete t[_]),a},O=Object.prototype.toString;var C=x,M=function(t){return O.call(t)},z=D?D.toStringTag:void 0;var k=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?C(t):M(t)};var E=k,A=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==E(t)},V=S,T=W,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var j=function(t,e){if(V(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!T(t))||(L.test(t)||!N.test(t)||null!=e&&t in Object(e))};var I=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Y=k,R=I;var P,X=function(t){if(!R(t))return!1;var e=Y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},G=F["__core-js_shared__"],Z=(P=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var U=function(t){return!!Z&&Z in t},J=Function.prototype.toString;var K=X,q=U,Q=I,tt=function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""},et=/^\[object .+?Constructor\]$/,nt=Function.prototype,rt=Object.prototype,at=nt.toString,it=rt.hasOwnProperty,ot=RegExp("^"+at.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(t){return!(!Q(t)||q(t))&&(K(t)?ot:et).test(tt(t))},ct=function(t,e){return null==t?void 0:t[e]};var ut=function(t,e){var n=ct(t,e);return lt(n)?n:void 0},st=ut(Object,"create"),ht=st;var dt=function(){this.__data__=ht?ht(null):{},this.size=0};var ft=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},gt=st,pt=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(gt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return pt.call(e,t)?e[t]:void 0},mt=st,St=Object.prototype.hasOwnProperty;var $t=st;var vt=dt,Ft=ft,Dt=yt,Bt=function(t){var e=this.__data__;return mt?void 0!==e[t]:St.call(e,t)},Ht=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=$t&&void 0===e?"__lodash_hash_undefined__":e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=vt,bt.prototype.delete=Ft,bt.prototype.get=Dt,bt.prototype.has=Bt,bt.prototype.set=Ht;var wt=bt;var _t=function(){this.__data__=[],this.size=0};var xt=function(t,e){return t===e||t!=t&&e!=e};var Ot=function(t,e){for(var n=t.length;n--;)if(xt(t[n][0],e))return n;return-1},Ct=Ot,Mt=Array.prototype.splice;var zt=Ot;var kt=Ot;var Et=Ot;var At=_t,Wt=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():Mt.call(e,n,1),--this.size,!0)},Vt=function(t){var e=this.__data__,n=zt(e,t);return n<0?void 0:e[n][1]},Tt=function(t){return kt(this.__data__,t)>-1},Nt=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=At,Lt.prototype.delete=Wt,Lt.prototype.get=Vt,Lt.prototype.has=Tt,Lt.prototype.set=Nt;var jt=Lt,It=ut(F,"Map"),Yt=wt,Rt=jt,Pt=It;var Xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Gt=function(t,e){var n=t.__data__;return Xt(e)?n["string"==typeof e?"string":"hash"]:n.map},Zt=Gt;var Ut=Gt;var Jt=Gt;var Kt=Gt;var qt=function(){this.size=0,this.__data__={hash:new Yt,map:new(Pt||Rt),string:new Yt}},Qt=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e},te=function(t){return Ut(this,t).get(t)},ee=function(t){return Jt(this,t).has(t)},ne=function(t,e){var n=Kt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function re(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}re.prototype.clear=qt,re.prototype.delete=Qt,re.prototype.get=te,re.prototype.has=ee,re.prototype.set=ne;var ae=re;function ie(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(ie.Cache||ae),n}ie.Cache=ae;var oe=ie;var le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ce=/\\(\\)?/g,ue=function(t){var e=oe(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(le,(function(t,n,r,a){e.push(r?a.replace(ce,"$1"):n||t)})),e}));var se=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},he=S,de=W,fe=D?D.prototype:void 0,ge=fe?fe.toString:void 0;var pe=function t(e){if("string"==typeof e)return e;if(he(e))return se(e,t)+"";if(de(e))return ge?ge.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ye=pe;var me=S,Se=j,$e=ue,ve=function(t){return null==t?"":ye(t)};var Fe=W;var De=function(t,e){return me(t)?t:Se(t,e)?[t]:$e(ve(t))},Be=function(t){if("string"==typeof t||Fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var He=function(t,e){for(var n=0,r=(e=De(e,t)).length;null!=t&&n<r;)t=t[Be(e[n++])];return n&&n==r?t:void 0};var be=function(t,e,n){var r=null==t?void 0:He(t,e);return void 0===r?n:r};const we=(t,e,n)=>e?be(n,e)||be(t,e):n||t,_e=(t,e)=>{const n=e||t.defaultValue;return be(t.collections,n)};var xe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme"}(xe||(xe={}));const Oe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=_e(Oe,n[xe.colorScheme]);return n.options&&n.options.color?we(r,t,n.options.color):we(r,t)},Me={Brand:{1:Ce("Brand.1"),2:Ce("Brand.2"),3:Ce("Brand.3"),4:Ce("Brand.4"),5:Ce("Brand.5"),6:Ce("Brand.6")},Primary:Ce("Primary"),PrimaryDark:Ce("PrimaryDark"),Secondary:Ce("Secondary"),Accent:{Light:{1:Ce("Accent.Light.1"),2:Ce("Accent.Light.2"),3:Ce("Accent.Light.3"),4:Ce("Accent.Light.4"),5:Ce("Accent.Light.5"),6:Ce("Accent.Light.6")},Dark:{1:Ce("Accent.Dark.1"),2:Ce("Accent.Dark.2"),3:Ce("Accent.Dark.3")}},Neutral:{1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")},Validation:{Green:{Text:Ce("Validation.Green.Text"),Icon:Ce("Validation.Green.Icon"),Border:Ce("Validation.Green.Border"),Background:Ce("Validation.Green.Background")},Orange:{Text:Ce("Validation.Orange.Text"),Icon:Ce("Validation.Orange.Icon"),Border:Ce("Validation.Orange.Border"),Background:Ce("Validation.Orange.Background"),Badge:Ce("Validation.Orange.Badge")},Red:{Text:Ce("Validation.Red.Text"),Icon:Ce("Validation.Red.Icon"),Border:Ce("Validation.Red.Border"),Background:Ce("Validation.Red.Background")}},Shadow:{Accent:Ce("Shadow.Accent"),Red:Ce("Shadow.Red")}},ze={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${Me.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${Me.Shadow.Red}
    `}},defaultValue:"base"},ke=t=>e=>{const n=e.theme,r=_e(ze,n[xe.designTokenScheme]);return n.options?.designToken?we(r,t,n.options.designToken):we(r,t)},Ee=ke("InputBoxShadow"),Ae=ke("InputErrorBoxShadow"),We={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ve={collections:{base:{D1:{fontFamily:We.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:We.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:We.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:We.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:We.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:We.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:We.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:We.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:We.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:We.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:We.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:We.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Te=t=>e=>{const n=e.theme,r=_e(Ve,n[xe.textStyleScheme]);return n.options&&n.options.textStyle?we(r,t,n.options.textStyle):we(r,t)},Ne={D1:{fontFamily:Te("D1.fontFamily"),fontSize:Te("D1.fontSize"),fontWeight:Te("D1.fontWeight"),lineHeight:Te("D1.lineHeight"),letterSpacing:Te("D1.letterSpacing")},D2:{fontFamily:Te("D2.fontFamily"),fontSize:Te("D2.fontSize"),fontWeight:Te("D2.fontWeight"),lineHeight:Te("D2.lineHeight"),letterSpacing:Te("D2.letterSpacing")},D3:{fontFamily:Te("D3.fontFamily"),fontSize:Te("D3.fontSize"),fontWeight:Te("D3.fontWeight"),lineHeight:Te("D3.lineHeight"),letterSpacing:Te("D3.letterSpacing")},D4:{fontFamily:Te("D4.fontFamily"),fontSize:Te("D4.fontSize"),fontWeight:Te("D4.fontWeight"),lineHeight:Te("D4.lineHeight"),letterSpacing:Te("D4.letterSpacing")},DBody:{fontFamily:Te("DBody.fontFamily"),fontSize:Te("DBody.fontSize"),fontWeight:Te("DBody.fontWeight"),lineHeight:Te("DBody.lineHeight"),letterSpacing:Te("DBody.letterSpacing")},H1:{fontFamily:Te("H1.fontFamily"),fontSize:Te("H1.fontSize"),fontWeight:Te("H1.fontWeight"),lineHeight:Te("H1.lineHeight"),letterSpacing:Te("H1.letterSpacing")},H2:{fontFamily:Te("H2.fontFamily"),fontSize:Te("H2.fontSize"),fontWeight:Te("H2.fontWeight"),lineHeight:Te("H2.lineHeight"),letterSpacing:Te("H2.letterSpacing")},H3:{fontFamily:Te("H3.fontFamily"),fontSize:Te("H3.fontSize"),fontWeight:Te("H3.fontWeight"),lineHeight:Te("H3.lineHeight"),letterSpacing:Te("H3.letterSpacing")},H4:{fontFamily:Te("H4.fontFamily"),fontSize:Te("H4.fontSize"),fontWeight:Te("H4.fontWeight"),lineHeight:Te("H4.lineHeight"),letterSpacing:Te("H4.letterSpacing")},H5:{fontFamily:Te("H5.fontFamily"),fontSize:Te("H5.fontSize"),fontWeight:Te("H5.fontWeight"),lineHeight:Te("H5.lineHeight"),letterSpacing:Te("H5.letterSpacing")},H6:{fontFamily:Te("H6.fontFamily"),fontSize:Te("H6.fontSize"),fontWeight:Te("H6.fontWeight"),lineHeight:Te("H6.lineHeight"),letterSpacing:Te("H6.letterSpacing")},Body:{fontFamily:Te("Body.fontFamily"),fontSize:Te("Body.fontSize"),fontWeight:Te("Body.fontWeight"),lineHeight:Te("Body.lineHeight"),letterSpacing:Te("Body.letterSpacing")},BodySmall:{fontFamily:Te("BodySmall.fontFamily"),fontSize:Te("BodySmall.fontSize"),fontWeight:Te("BodySmall.fontWeight"),lineHeight:Te("BodySmall.lineHeight"),letterSpacing:Te("BodySmall.letterSpacing")},XSmall:{fontFamily:Te("XSmall.fontFamily"),fontSize:Te("XSmall.fontSize"),fontWeight:Te("XSmall.fontWeight"),lineHeight:Te("XSmall.lineHeight"),letterSpacing:Te("XSmall.letterSpacing")}},Le=t=>{switch(t){case 700:case"bold":return We.Bold;case 600:case"semibold":return We.Semibold;case 300:case"light":return We.Light;case 400:case"regular":return We.Regular;default:return""}},je=(t,e)=>n=>{const r=Ne[t].fontFamily(n),a=Ne[t].fontWeight(n);return Object.values(We).includes(r)?l`
                font-family: ${Le(e)||Le(a)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Ie(e)||a)??"normal"};
        `},Ie=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ye=(t,e,n=!1)=>r=>{const a=Ne[t],i=a.fontSize(r);return l`
            ${je(t,e)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Re=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var Pe,Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});var Ge=t;const Ze=t=>Ge.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ge.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ue;Ze.displayName="ExternalIcon",Pe=Xe.ExternalIcon=Ze,function(t){t.D1=o.h1`
        ${t=>l`
                ${Ye("D1",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>l`
                ${Ye("D2",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>l`
                ${Ye("D3",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>l`
                ${Ye("D4",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>l`
                ${Ye("DBody",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>l`
                ${Ye("H1",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>l`
                ${Ye("H2",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>l`
                ${Ye("H3",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>l`
                ${Ye("H4",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>l`
                ${Ye("H5",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>l`
                ${Ye("H6",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>l`
                ${Ye("Body",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>l`
                ${Ye("BodySmall",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>l`
                ${Ye("XSmall",t.weight,t.paragraph)}
                color: ${Me.Neutral[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>qe({...t,textStyle:"Body"}),Small:t=>qe({...t,textStyle:"BodySmall"})}}(Ue||(Ue={}));const Je=o.a`
    ${t=>l`
            ${Ye(t.textStyle,t.weight)}
            color: ${Me.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Me.Secondary};

                svg {
                    color: ${Me.Secondary};
                }
            }
        `}
`,Ke=o(Pe)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qe=({external:t=!1,children:r,...a})=>e(Je,{...a,children:[r,t&&n(Ke,{})]}),Qe=o.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Me.Neutral[5]};
    border-radius: 4px;
    background: ${Me.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Me.Accent.Light[1]};
        box-shadow: ${Ee};
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
                background: ${Me.Neutral[6](t)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Me.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.$error?l`
                border: 1px solid ${Me.Validation.Red.Border(t)};

                :focus-within {
                    border: 1px solid ${Me.Validation.Red.Border(t)};
                    box-shadow: ${Ae};
                }
            `:void 0}
`,tn=o.div`
    position: absolute;
    top: 0;
    left: ${t=>t.$readOnly?"-0.5rem":"1rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,en=o.input`
    ${Ye("Body","regular")}
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
`,nn=o(en)`
    width: 2.6rem;
`,rn=o(en)`
    width: 3.5rem;
`,an=o(Ue.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${t=>{if(t.$hide)return l`
                color: ${Me.Neutral[3]};
            `}}
`;o(an)`
    ${t=>{if(t.$compress)return l`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const on=({disabled:t,error:o,value:l,onChange:c,onBlur:u,onChangeRaw:s,onBlurRaw:h,readOnly:d,id:f,...g})=>{const[p,S]=r(""),[$,v]=r(""),[F,D]=r(""),[B,H]=r("none"),b=a(null),w=a(null),_=a(null),x=a(null),O=a(p),C=a($),M=a(F),z=a(B),k=t=>{O.current=t,S(t)},E=t=>{C.current=t,v(t)},A=t=>{M.current=t,D(t)},W=t=>{z.current=t,H(t)};i((()=>(document.addEventListener("mousedown",V),b.current&&b.current.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",V),b.current&&b.current.removeEventListener("keydown",T)})),[B]),i((()=>{"day"===B&&2===p.length&&_.current&&_.current.focus()}),[p]),i((()=>{"month"===B&&2===$.length&&x.current&&x.current.focus()}),[$]),i((()=>{Y(l)}),[l]);const V=e=>{t||d||b&&b.current.contains(e.target)||"none"!==z.current&&(W("none"),P())},T=t=>{"year"===t.target.name&&"Tab"===t.code&&(W("none"),P())},N=t=>{W(t.target.name),t.target.select()},L=t=>{const e=t.target.name,n=m.padValue(t.target.value,!0);switch(e){case"day":k(n);break;case"month":E(n)}const r=p.length&&$.length&&4===F.length,a="day"===e,i=y.clampMonth($);r&&(k(m.padValue(y.clampDay(a?n:p,i,F))),E(m.padValue(i)))},j=t=>{const e=t.target.name,n=t.target.value.replace(/[^0-9]/g,"");switch(e){case"day":k(n),R(n,e);break;case"month":E(n),R(n,e);break;case"year":A(n),R(n,e)}},I=t=>{"Backspace"!==t.code&&"Backspace"!==t.key||("month"===B&&0===$.length&&w.current.focus(),"year"===B&&0===F.length&&_.current.focus())},Y=t=>{if(void 0===t||""===t)k(""),E(""),A("");else{const e=new Date(t);if(!isNaN(e.getTime())){const t=(e.getMonth()+1).toString(),n=e.getFullYear().toString(),r=y.clampDay(e.getDate().toString(),t,n);k(m.padValue(r)),E(m.padValue(t)),A(n)}}},R=(t,e)=>{if(c){const n={day:p,month:$,year:F};n[e]=t;const r=X(n);c(r)}if(s){const n=[..."day"===e?[m.padValue(t)]:[p],..."month"===e?[m.padValue(t)]:[$],..."year"===e?[t]:[F]];s(n)}},P=()=>{if(u){const t={day:O.current,month:C.current,year:M.current},e=X(t);u(e)}if(h){const t=[m.padValue(O.current.toString()),m.padValue(C.current.toString()),M.current];h(t)}},X=t=>{const e=[t.year,t.month,t.day];return t.day.length>=1&&t.month.length>=1&&4===t.year.length?e.join("-"):e.every((t=>""===t))?"":ln};return n(Qe,{ref:b,onClick:()=>{"none"===B&&w.current&&w.current.focus()},disabled:t,$error:o,id:f,"data-testid":g["data-testid"],$readOnly:d,children:e(tn,{$readOnly:d,children:[n(en,{name:"day",maxLength:2,value:p,ref:w,onFocus:N,onBlur:L,onChange:j,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input",readOnly:d,placeholder:"day"!==B||d?"DD":""}),n(an,{$hide:0===p.length,children:"/"}),n(nn,{name:"month",maxLength:2,value:$,ref:_,onFocus:N,onBlur:L,onChange:j,onKeyDown:I,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input",readOnly:d,placeholder:"month"!==B||d?"MM":""}),n(an,{$hide:0===$.length,children:"/"}),n(rn,{name:"year",maxLength:4,value:F,ref:x,onFocus:N,onBlur:L,onChange:j,onKeyDown:I,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input",readOnly:d,placeholder:"year"!==B||d?"YYYY":""})]})})},ln="Invalid date";export{on as DateInput};
//# sourceMappingURL=index.js.map
